import React, { useState, useEffect, useMemo } from 'react';
import { dataService } from 'shared-data';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, CheckCircle, XCircle, AlertTriangle, ChevronRight, FileText, ArrowLeft } from 'lucide-react';
import { VALIDATE_FLOWS } from './constants/flows';
import { evaluateCondition, validateAnswer, computeVisibility, buildValidatePayload } from './core/domain/ConditionEngine';

export default function App() {
  const [step, setStep] = useState('select'); // select | fill | result
  const [questionnaires, setQuestionnaires] = useState([]);
  const [quizAtivo, setQuizAtivo] = useState(null);
  const [perguntasData, setPerguntasData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isFallback, setIsFallback] = useState(dataService.isFallbackActive);
  const [apiError, setApiError] = useState(null);
  const [apiSuccess, setApiSuccess] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('NOME');
  const [channelInput, setChannelInput] = useState('');
  const [journeyInput, setJourneyInput] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [sortOrder, setSortOrder] = useState('createdAt,desc');
  const [isSearching, setIsSearching] = useState(false);
  
  const [answers, setAnswers] = useState({});
  const [fieldErrors, setFieldErrors] = useState({});
  const [visibleQuestions, setVisibleQuestions] = useState([]);
  const [validationResult, setValidationResult] = useState(null);

  useEffect(() => {
    const unsubFallback = dataService.subscribeToFallback(setIsFallback);
    const unsubError = dataService.subscribeToApiError(setApiError);
    const unsubSuccess = dataService.subscribeToApiSuccess(setApiSuccess);
    return () => { unsubFallback(); unsubError(); unsubSuccess(); };
  }, []);

  useEffect(() => {
    if (apiSuccess) {
      const timer = setTimeout(() => setApiSuccess(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [apiSuccess]);

  useEffect(() => {
    if (quizAtivo) {
      const configured = quizAtivo.configuredQuestions || [];
      const visibility = computeVisibility(configured, answers);
      setVisibleQuestions(visibility);
    }
  }, [answers, quizAtivo]);

  const carregarQuestionarios = async () => {
    setIsSearching(true);
    try {
      const filters = {
        buscaValor: searchTerm,
        buscaTipo: searchType,
        status: statusFilter,
        channelId: channelInput,
        journeyId: journeyInput
      };
      const response = await dataService.getQuestionarios({ 
        size: 20, 
        filters,
        sort: sortOrder,
        flowId: VALIDATE_FLOWS.LIST 
      });
      setQuestionnaires(response.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSearching(false);
    }
  };

  useEffect(() => {
    carregarQuestionarios();
  }, []);

  const carregarDetalheQuestionario = async (quiz) => {
    setIsLoading(true);
    try {
      const detail = await dataService.getQuestionarioById(
        quiz.id,
        quiz.channelDistributionId,
        quiz.journeyDistributionId,
        VALIDATE_FLOWS.GET_DETAIL
      );
      
      setQuizAtivo(detail);
      
      const perguntaIds = (detail.configuredQuestions || []).map(cq => cq.questionId);
      if (perguntaIds.length > 0) {
        await carregarPerguntas(perguntaIds);
      }
      
      setAnswers({});
      setFieldErrors({});
      setStep('fill');
    } catch (err) {
      console.error(err);
      alert('Erro ao carregar questionário');
    } finally {
      setIsLoading(false);
    }
  };

  const carregarPerguntas = async (ids) => {
    try {
      const response = await dataService.getPerguntas({
        filters: { buscaValor: ids.join(','), buscaTipo: 'ID' },
        size: 100,
        flowId: VALIDATE_FLOWS.GET_DETAIL
      });
      
      const perguntasMap = {};
      (response.data || []).forEach(p => {
        perguntasMap[p.id] = p;
      });
      setPerguntasData(perguntasMap);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    setFieldErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[questionId];
      return newErrors;
    });
  };

  const handleBlur = (question, configuredQuestion) => {
    const answer = answers[question.id];
    const answerConfig = configuredQuestion?.answerConfiguration || { type: 'TEXT', attributes: {} };
    const errors = validateAnswer(question, answer, answerConfig);
    
    if (errors.length > 0) {
      setFieldErrors(prev => ({ ...prev, [question.id]: errors[0] }));
    }
  };

  const validarTodas = () => {
    if (!quizAtivo) return;

    let hasErrors = false;
    const configured = quizAtivo.configuredQuestions || [];
    const newErrors = {};

    configured.forEach(cq => {
      if (!isQuestionVisible(cq.questionId)) return;
      const pergunta = perguntasData[cq.questionId];
      if (!pergunta) return;
      
      const answerConfig = cq.answerConfiguration || { type: 'TEXT', attributes: {} };
      const answer = answers[cq.questionId];
      const errors = validateAnswer(pergunta, answer, answerConfig);
      
      if (errors.length > 0) {
        newErrors[cq.questionId] = errors[0];
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setFieldErrors(newErrors);
      return;
    }

    setFieldErrors({});
    enviarParaValidacao();
  };

const converterValor = (valor, tipo) => {
    if (valor === '' || valor === null || valor === undefined) return valor;
    
    const tipoUpper = (tipo || '').toUpperCase();
    
    if (tipoUpper === 'NUMERIC' || tipoUpper === 'NUMBER' || tipoUpper === 'DECIMAL') {
      const num = parseFloat(valor);
      return isNaN(num) ? valor : num;
    }
    if (tipoUpper === 'INTEGER' || tipoUpper === 'INT') {
      const int = parseInt(valor, 10);
      return isNaN(int) ? valor : int;
    }
    if (tipoUpper === 'BOOLEAN') {
      return valor === true || valor === 'true' || valor === '1' || valor === 'yes' || valor === 'sim';
    }
    return valor;
  };

const enviarParaValidacao = async () => {
    if (!quizAtivo) return;

    setIsLoading(true);
    try {
      const configuredQuestions = (quizAtivo.configuredQuestions || [])
        .filter(cq => isQuestionVisible(cq.questionId));
      
      const answersConvertidos = {};
      configuredQuestions.forEach(cq => {
        const tipo = 
          cq.answerConfiguration?.type || 
          cq.param?.answerConfig?.type ||
          cq.param?.answerConfiguration?.type ||
          'TEXT';
        answersConvertidos[cq.questionId] = converterValor(answers[cq.questionId], tipo);
      });

      const payload = {
        questionnaireId: quizAtivo.id,
        channelDistributionId: quizAtivo.channelDistributionId,
        journeyDistributionId: quizAtivo.journeyDistributionId,
        answers: answersConvertidos
      };
      
      const res = await fetch('http://localhost:9005/api/v1/questionnaires/validate-answers', {
        method: 'POST',
        headers: dataService.getHeaders(VALIDATE_FLOWS.VALIDATE),
        body: JSON.stringify(payload)
      });

      const result = await res.json();
      
      if (!res.ok) {
        const isReal = await dataService.notifyApiError(res);
        if (!isReal && await dataService.requestFallback('Validar Respostas')) {
          setValidationResult({ valid: false, errors: [], message: 'Modo fallback - validação simulada' });
          setStep('result');
          return;
        }
        throw new Error('Falha na validação');
      }

      const validationData = result.data || result;
      const violationsByQuestion = validationData.violationsByQuestionId || {};
      const errors = Object.values(violationsByQuestion).map(v => ({
        questionId: v.questionId,
        questionLabel: v.questionLabel,
        providedAnswer: v.providedAnswer,
        violations: v.violations || []
      }));

      setValidationResult({
        valid: validationData.valid || false,
        message: validationData.valid 
          ? 'Todas as respostas foram validadas com sucesso.' 
          : `${errors.length} pergunta(s) com problema(s) encontrado(s).`,
        errors
      });
      setStep('result');
    } catch (err) {
      console.error(err);
      alert('Erro ao validar respostas');
    } finally {
      setIsLoading(false);
    }
  };

  const isQuestionVisible = (questionId) => {
    const vis = visibleQuestions.find(v => v.id === questionId);
    return vis ? vis.visible : true;
  };

  const orderedQuestions = useMemo(() => {
    if (!quizAtivo) return [];
    const configured = quizAtivo.configuredQuestions || [];
    return [...configured]
      .filter(cq => isQuestionVisible(cq.questionId))
      .sort((a, b) => (a.param?.order || 0) - (b.param?.order || 0));
  }, [quizAtivo, visibleQuestions]);

  const getFieldComponent = (pergunta, configuredQuestion) => {
    const answerConfig = configuredQuestion?.answerConfiguration || { type: 'TEXT', attributes: {} };
    const answerType = answerConfig.type || 'TEXT';
    const attrs = answerConfig.attributes || {};
    const value = answers[pergunta.id] || '';
    const error = fieldErrors[pergunta.id];

    const baseClass = `w-full bg-zinc-950 border p-4 rounded-none text-sm focus:outline-none transition-all ${
      error 
        ? 'border-red-500 focus:border-red-500' 
        : 'border-zinc-800 focus:border-blue-600'
    }`;

    switch (answerType) {
      case 'TEXT':
        return (
          <input
            type="text"
            value={value}
            onChange={e => handleAnswerChange(pergunta.id, e.target.value)}
            onBlur={() => handleBlur(pergunta, configuredQuestion)}
            placeholder={attrs.placeholder || 'Digite sua resposta...'}
            maxLength={attrs.maxLength || 500}
            className={baseClass}
          />
        );

      case 'NUMERIC':
        return (
          <input
            type="number"
            value={value}
            onChange={e => handleAnswerChange(pergunta.id, e.target.value)}
            onBlur={() => handleBlur(pergunta, configuredQuestion)}
            placeholder={attrs.placeholder || 'Digite um número...'}
            min={attrs.minValue}
            max={attrs.maxValue}
            step={attrs.step || 'any'}
            className={baseClass}
          />
        );

      case 'EMAIL':
        return (
          <input
            type="email"
            value={value}
            onChange={e => handleAnswerChange(pergunta.id, e.target.value)}
            onBlur={() => handleBlur(pergunta, configuredQuestion)}
            placeholder={attrs.placeholder || 'seu@email.com'}
            className={baseClass}
          />
        );

      case 'PHONE':
        return (
          <input
            type="tel"
            value={value}
            onChange={e => handleAnswerChange(pergunta.id, e.target.value)}
            onBlur={() => handleBlur(pergunta, configuredQuestion)}
            placeholder={attrs.placeholder || '(00) 00000-0000'}
            className={baseClass}
          />
        );

      case 'DATE':
        return (
          <input
            type="date"
            value={value}
            onChange={e => handleAnswerChange(pergunta.id, e.target.value)}
            onBlur={() => handleBlur(pergunta, configuredQuestion)}
            className={baseClass}
          />
        );

      case 'TEXTAREA':
        return (
          <textarea
            value={value}
            onChange={e => handleAnswerChange(pergunta.id, e.target.value)}
            onBlur={() => handleBlur(pergunta, configuredQuestion)}
            placeholder={attrs.placeholder || 'Digite sua resposta...'}
            rows={attrs.rows || 4}
            maxLength={attrs.maxLength || 2000}
            className={`${baseClass} resize-none`}
          />
        );

      case 'OPTION_LIST':
        const options = attrs.answerOptions || [];
        return (
          <select
            value={value}
            onChange={e => {
              handleAnswerChange(pergunta.id, e.target.value);
              handleBlur(pergunta, configuredQuestion);
            }}
            className={`${baseClass} appearance-none`}
          >
            <option value="">Selecione uma opção...</option>
            {options.map((opt, idx) => (
              <option key={idx} value={opt.value}>
                {opt.label || opt.value}
              </option>
            ))}
          </select>
        );

      case 'MULTI_OPTION':
        const multiOptions = attrs.answerOptions || [];
        const selectedValues = Array.isArray(value) ? value : [];
        return (
          <div className="space-y-2">
            {multiOptions.map((opt, idx) => {
              const isChecked = selectedValues.includes(opt.value);
              return (
                <label
                  key={idx}
                  className={`flex items-center gap-3 p-3 border cursor-pointer transition-all ${
                    isChecked 
                      ? 'bg-blue-600/10 border-blue-500' 
                      : 'bg-zinc-950 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => {
                      const newValues = isChecked
                        ? selectedValues.filter(v => v !== opt.value)
                        : [...selectedValues, opt.value];
                      handleAnswerChange(pergunta.id, newValues);
                    }}
                    className="w-4 h-4 accent-blue-500"
                  />
                  <span className="text-sm">{opt.label || opt.value}</span>
                </label>
              );
            })}
          </div>
        );

      case 'RADIO':
        const radioOptions = attrs.answerOptions || [];
        return (
          <div className="space-y-2">
            {radioOptions.map((opt, idx) => (
              <label
                key={idx}
                className={`flex items-center gap-3 p-3 border cursor-pointer transition-all ${
                  value === opt.value 
                    ? 'bg-blue-600/10 border-blue-500' 
                    : 'bg-zinc-950 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <input
                  type="radio"
                  name={`question_${pergunta.id}`}
                  value={opt.value}
                  checked={value === opt.value}
                  onChange={() => {
                    handleAnswerChange(pergunta.id, opt.value);
                    handleBlur(pergunta, configuredQuestion);
                  }}
                  className="w-4 h-4 accent-blue-500"
                />
                <span className="text-sm">{opt.label || opt.value}</span>
              </label>
            ))}
          </div>
        );

      default:
        return (
          <input
            type="text"
            value={value}
            onChange={e => handleAnswerChange(pergunta.id, e.target.value)}
            placeholder="Digite sua resposta..."
            className={baseClass}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans p-8">
      <header className="max-w-3xl mx-auto mb-10 border-b border-zinc-900 pb-6">
        <div className="flex items-center gap-4">
          {step !== 'select' && (
            <button
              onClick={() => {
                setStep('select');
                setQuizAtivo(null);
                setAnswers({});
                setFieldErrors({});
                setValidationResult(null);
              }}
              className="p-2 text-zinc-500 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
          )}
          <div>
            <h2 className="text-2xl font-black text-zinc-100 tracking-tighter uppercase">
              {step === 'select' && 'Teste seu Questionário'}
              {step === 'fill' && `Questionário: ${quizAtivo?.nome || ''}`}
              {step === 'result' && 'Resultado da Validação'}
            </h2>
            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-1">
              {step === 'select' && 'Selecione um questionário para testar'}
              {step === 'fill' && 'Preencha as respostas para validação'}
              {step === 'result' && 'Verifique o status das suas respostas'}
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          {step === 'select' && (
            <motion.div
              key="select"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="bg-zinc-900 p-6 border border-zinc-800 rounded-none mb-6">
                <div className="flex gap-3 mb-4">
                  <select 
                    className="bg-zinc-950 border border-zinc-800 p-3 rounded-none text-sm focus:border-blue-600 outline-none text-zinc-400 w-32"
                    value={searchType}
                    onChange={e => setSearchType(e.target.value)}
                  >
                    <option value="NOME">Nome</option>
                    <option value="ID">ID</option>
                  </select>
                  <input 
                    type="text"
                    placeholder={searchType === 'NOME' ? "Buscar por nome..." : "Buscar por ID..."}
                    className="flex-1 bg-zinc-950 border border-zinc-800 p-3 rounded-none text-sm focus:border-blue-600 outline-none" 
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && carregarQuestionarios()}
                  />
                  <button 
                    onClick={carregarQuestionarios}
                    disabled={isSearching}
                    className="bg-blue-600 hover:bg-blue-500 px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all disabled:opacity-50"
                  >
                    {isSearching ? '...' : 'Buscar'}
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <input 
                    placeholder="Filtrar por Canal (opcional)" 
                    className="flex-1 min-w-[150px] bg-zinc-950 border border-zinc-800 p-3 rounded-none text-sm focus:border-blue-600 outline-none" 
                    value={channelInput}
                    onChange={e => setChannelInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && carregarQuestionarios()}
                  />
                  
                  <input 
                    placeholder="Filtrar por Jornada (opcional)" 
                    className="flex-1 min-w-[150px] bg-zinc-950 border border-zinc-800 p-3 rounded-none text-sm focus:border-blue-600 outline-none" 
                    value={journeyInput}
                    onChange={e => setJourneyInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && carregarQuestionarios()}
                  />

                  <select 
                    className="bg-zinc-950 border border-zinc-800 p-3 rounded-none text-sm focus:border-blue-600 outline-none text-zinc-400 w-40"
                    value={statusFilter}
                    onChange={e => setStatusFilter(e.target.value)}
                  >
                    <option value="ALL">Todos os Status</option>
                    <option value="ACTIVE">Ativos</option>
                    <option value="INACTIVE">Inativos</option>
                    <option value="DRAFT">Rascunho</option>
                  </select>

                  <select 
                    className="bg-zinc-950 border border-zinc-800 p-3 rounded-none text-sm focus:border-blue-600 outline-none text-zinc-400 w-40"
                    value={sortOrder}
                    onChange={e => setSortOrder(e.target.value)}
                  >
                    <option value="createdAt,desc">Mais recentes</option>
                    <option value="createdAt,asc">Mais antigos</option>
                    <option value="description,asc">Nome (A-Z)</option>
                    <option value="description,desc">Nome (Z-A)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                {questionnaires.map(quiz => (
                  <div
                    key={quiz.id}
                    onClick={() => carregarDetalheQuestionario(quiz)}
                    className="p-5 bg-zinc-900/40 border border-zinc-800 rounded-none flex justify-between items-center cursor-pointer hover:border-blue-500/40 hover:bg-zinc-900/60 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-zinc-800 rounded-none flex items-center justify-center text-zinc-400">
                        <FileText size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-zinc-200">{quiz.nome}</h3>
                        <div className="flex gap-3 mt-1">
                          <span className="text-[9px] text-zinc-500 font-mono uppercase">{quiz.id}</span>
                          <span className={`text-[9px] px-2 py-0.5 font-bold uppercase border ${
                            quiz.status === 'ACTIVE' 
                              ? 'bg-emerald-600/20 text-emerald-500 border-emerald-500/20' 
                              : 'bg-zinc-800 text-zinc-400 border-zinc-700'
                          }`}>
                            {quiz.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <ChevronRight size={20} className="text-zinc-600 group-hover:text-blue-500 transition-colors" />
                  </div>
                ))}

                {questionnaires.length === 0 && !isSearching && (
                  <div className="text-center py-20">
                    <div className="text-5xl grayscale opacity-30 mb-4">📜</div>
                    <p className="text-zinc-500 text-sm">Nenhum questionário encontrado</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {step === 'fill' && quizAtivo && (
            <motion.div
              key="fill"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="space-y-6">
                {orderedQuestions.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-zinc-500">Nenhuma pergunta disponível para este questionário.</p>
                  </div>
                )}

                {orderedQuestions.map((cq, index) => {
                  const pergunta = perguntasData[cq.questionId];
                  if (!pergunta) return null;

                  const error = fieldErrors[cq.questionId];
                  
                  return (
                    <motion.div
                      key={cq.questionId}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-zinc-900/40 border border-zinc-800 rounded-none p-6"
                    >
                      <div className="mb-4">
                        <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest mr-2">
                          {index + 1}.
                        </span>
                        <span className="text-sm font-bold text-zinc-200">{pergunta.label}</span>
                        {(cq.answerConfiguration?.attributes?.required) && (
                          <span className="text-red-500 ml-1">*</span>
                        )}
                      </div>
                      
                      <div className="mt-3">
                        {getFieldComponent(pergunta, cq)}
                      </div>
                      
                      {error && (
                        <p className="text-red-400 text-[10px] mt-2 font-bold uppercase tracking-widest">
                          {error}
                        </p>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800 flex justify-end gap-4">
                <button
                  onClick={() => setStep('select')}
                  className="bg-zinc-800 hover:bg-zinc-700 px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all"
                >
                  Cancelar
                </button>
                <button
                  onClick={validarTodas}
                  disabled={isLoading || orderedQuestions.length === 0}
                  className="bg-emerald-600 hover:bg-emerald-500 px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all disabled:opacity-50 flex items-center gap-3"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Validando...
                    </>
                  ) : (
                    <>
                      Validar Respostas
                      <ChevronRight size={16} />
                    </>
                  )}
                </button>
              </div>

              <p className="text-center text-zinc-600 text-[10px] mt-4">
                * Campos obrigatórios. As validações são realizadas de acordo com as regras configuradas.
              </p>
            </motion.div>
          )}

          {step === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <div className={`p-8 border rounded-none text-center mb-8 ${
                validationResult?.valid
                  ? 'bg-emerald-900/20 border-emerald-500/30'
                  : 'bg-red-900/20 border-red-500/30'
              }`}>
                <div className={`w-20 h-20 mx-auto rounded-none flex items-center justify-center mb-4 ${
                  validationResult?.valid
                    ? 'bg-emerald-600/20'
                    : 'bg-red-600/20'
                }`}>
                  {validationResult?.valid ? (
                    <CheckCircle size={40} className="text-emerald-500" />
                  ) : (
                    <XCircle size={40} className="text-red-500" />
                  )}
                </div>
                
                <h3 className={`text-2xl font-black mb-2 uppercase tracking-widest ${
                  validationResult?.valid ? 'text-emerald-400' : 'text-red-400'
                }`}>
                  {validationResult?.valid ? 'Validação Aprovada!' : 'Validação Rejeitada'}
                </h3>
                
                <p className="text-zinc-400 text-sm">
                  {validationResult?.message}
                </p>
              </div>

              {!validationResult?.valid && validationResult?.errors && validationResult.errors.length > 0 && (
                <div className="bg-zinc-900/40 border border-zinc-800 rounded-none p-6 mb-8">
                  <h4 className="text-sm font-bold text-zinc-200 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <AlertTriangle size={16} className="text-amber-500" />
                    Erros Encontrados ({validationResult.errors.length})
                  </h4>
                  <div className="space-y-4">
                    {validationResult.errors.map((error, idx) => (
                      <div key={idx} className="p-5 bg-red-900/10 border border-red-500/20 rounded-none">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest block mb-1">
                              #{error.questionLabel || error.questionId}
                            </span>
                            <p className="text-sm text-zinc-200 font-medium">"{error.questionLabel}"</p>
                          </div>
                          <span className="text-[9px] bg-zinc-800 px-2 py-1 font-mono">
                            #{error.questionId}
                          </span>
                        </div>
                        
                        <p className="text-[10px] text-zinc-500 mb-3">
                          Resposta fornecida: <span className="font-mono text-zinc-300">
                            {error.providedAnswer !== undefined ? String(error.providedAnswer) : '(vazia)'}
                          </span>
                        </p>

                        {error.violations && error.violations.length > 0 && (
                          <div className="border-t border-red-500/20 pt-3 mt-3">
                            <p className="text-[9px] font-black text-red-500 uppercase tracking-widest mb-2">
                              Violações:
                            </p>
                            {error.violations.map((violation, vIdx) => (
                              <div key={vIdx} className="bg-black/20 p-3 mb-2 border-l-2 border-red-500 last:mb-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-[9px] font-black text-red-400 bg-red-900/30 px-2 py-0.5">
                                    {violation.code}
                                  </span>
                                  <span className="text-[9px] text-zinc-500 uppercase">
                                    {violation.ruleType}
                                  </span>
                                </div>
                                <p className="text-xs text-zinc-300">{violation.message}</p>
                                {violation.ruleAttributes && (
                                  <p className="text-[10px] text-zinc-500 mt-2 font-mono">
                                    Attributes: {JSON.stringify(violation.ruleAttributes)}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-center gap-4">
                <button
                  onClick={() => {
                    setAnswers({});
                    setFieldErrors({});
                    setStep('fill');
                    setValidationResult(null);
                  }}
                  className="bg-zinc-800 hover:bg-zinc-700 px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all"
                >
                  Tentar Novamente
                </button>
                <button
                  onClick={() => {
                    setStep('select');
                    setQuizAtivo(null);
                    setAnswers({});
                    setFieldErrors({});
                    setValidationResult(null);
                  }}
                  className="bg-blue-600 hover:bg-blue-500 px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all"
                >
                  Escolher Outro
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {isFallback && (
        <div className="fixed bottom-6 right-6 bg-amber-600/90 backdrop-blur-lg text-white px-6 py-4 font-bold shadow-2xl flex items-center gap-4 z-50 border border-amber-400/50">
          <span className="text-xl">⚠️</span>
          <div>
            <p className="uppercase tracking-widest text-[10px] font-black">Offline Fallback</p>
            <p className="font-normal opacity-80 text-[10px] mt-1">Modo offline ativo</p>
          </div>
        </div>
      )}

      {apiError && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className="fixed top-24 right-6 bg-red-600 text-white px-6 py-4 shadow-2xl z-[100] border-l-4 border-red-400 flex items-center gap-4 max-w-md"
        >
          <div className="bg-red-500 p-2"><span className="font-bold">!</span></div>
          <div className="flex-1">
            <p className="text-[10px] font-black uppercase tracking-widest opacity-70">Erro</p>
            <p className="text-xs font-bold mt-0.5">{apiError.message}</p>
          </div>
          <button onClick={() => setApiError(null)} className="opacity-50 hover:opacity-100">✕</button>
        </motion.div>
      )}

      {apiSuccess && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className="fixed top-24 right-6 bg-emerald-600 text-white px-6 py-4 shadow-2xl z-[100] border-l-4 border-emerald-400 flex items-center gap-4 max-w-md"
        >
          <div className="bg-emerald-500 p-2"><span className="font-bold">✓</span></div>
          <div className="flex-1">
            <p className="text-[10px] font-black uppercase tracking-widest opacity-70">Sucesso</p>
            <p className="text-xs font-bold mt-0.5">{apiSuccess.message}</p>
          </div>
          <button onClick={() => setApiSuccess(null)} className="opacity-50 hover:opacity-100">✕</button>
        </motion.div>
      )}
    </div>
  );
}