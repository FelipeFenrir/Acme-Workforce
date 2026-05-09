import React from 'react';
import { Settings, Trash2, ChevronRight, ListOrdered, FileJson, Zap, Plus, X, Calendar, Hash, Globe, Map, User, Clock, Check, Layers, FileText } from 'lucide-react';
import { Panel } from 'reactflow';
import { motion } from 'framer-motion';
import { updateNodeConfig } from '../core/use-cases/updateNodeConfig';

export function ConfigPanel({ node, allNodes, onUpdate, onDelete, onClose }) {
  if (!node) return null;

  const isQuiz = node.type === 'quizNode';
  const data = node.data || {};
  
  // Para perguntas, usamos config. Para o quiz, usamos as propriedades diretas do data.
  const config = isQuiz ? data : (data.config || { order: 0, answerConfig: { type: 'TEXT', attributes: {} }, rootCondition: null });

  const handleChange = (path, value) => {
    const newData = updateNodeConfig(node, path, value);
    onUpdate(node.id, newData);
  };

  // Helper para renderizar editor de condição (recursivo para COMPOSITE)
  const renderConditionEditor = (condition, path = 'rootCondition') => {
    if (!condition) return null;

    const otherNodes = (allNodes || []).filter(n => n.id !== node.id && n.type === 'perguntaNode');

    return (
      <div className="space-y-4 p-4 bg-zinc-950/50 border border-zinc-800/50 mt-2">
        <div className="flex justify-between items-center mb-2">
          <p className="text-[9px] font-black text-blue-500 uppercase tracking-tighter">Regra de Visibilidade</p>
          <select 
            value={condition.type || 'EQUAL'}
            onChange={(e) => handleChange(`${path}.type`, e.target.value)}
            className="bg-zinc-900 border border-zinc-800 text-[9px] p-1 text-zinc-300 outline-none"
          >
            <option value="EQUAL">EQUAL</option>
            <option value="NUMERIC">NUMERIC</option>
            <option value="COMPOSITE">COMPOSITE (AND/OR)</option>
          </select>
        </div>

        {condition.type === 'COMPOSITE' ? (
          <div className="space-y-4">
             <div className="flex items-center gap-4 bg-zinc-900 p-2 border border-zinc-800">
                <p className="text-[9px] font-bold text-zinc-500 uppercase">Operador:</p>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" checked={condition.attributes?.operator === 'AND'} onChange={() => handleChange(`${path}.attributes.operator`, 'AND')} className="accent-blue-600" />
                  <span className="text-[10px] font-bold text-zinc-300">AND</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" checked={condition.attributes?.operator === 'OR'} onChange={() => handleChange(`${path}.attributes.operator`, 'OR')} className="accent-blue-600" />
                  <span className="text-[10px] font-bold text-zinc-300">OR</span>
                </label>
             </div>
             
             <div className="space-y-3 pl-4 border-l border-zinc-800">
                {(condition.children || []).map((child, idx) => (
                  <div key={idx} className="relative group">
                    <button 
                      onClick={() => {
                        const newChildren = [...condition.children];
                        newChildren.splice(idx, 1);
                        handleChange(`${path}.children`, newChildren);
                      }}
                      className="absolute -right-2 -top-2 p-1 bg-red-900/20 text-red-500 border border-red-900/50 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    >
                      <X size={10} />
                    </button>
                    {renderConditionEditor(child, `${path}.children.${idx}`)}
                  </div>
                ))}
                <button 
                  onClick={() => {
                    const newChildren = [...(condition.children || []), { type: 'EQUAL', attributes: { questionRootCode: '', expectedValue: '' } }];
                    handleChange(`${path}.children`, newChildren);
                  }}
                  className="w-full py-2 border border-dashed border-zinc-800 hover:border-blue-500/50 text-[9px] font-black uppercase text-zinc-600 hover:text-blue-500 transition-all"
                >
                  + Adicionar Regra ao Grupo
                </button>
             </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3">
             <div className="space-y-1">
                <p className="text-[8px] font-bold text-zinc-600 uppercase">Pergunta Pai</p>
                <select 
                  value={condition.attributes?.questionRootCode || ''}
                  onChange={(e) => handleChange(`${path}.attributes.questionRootCode`, e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 p-2 text-[10px] text-zinc-300 outline-none"
                >
                  <option value="">Selecione...</option>
                  {otherNodes.map(n => (
                    <option key={n.id} value={n.data.id}>{n.data.label} ({n.data.id})</option>
                  ))}
                </select>
             </div>

             {condition.type === 'NUMERIC' && (
               <div className="space-y-1">
                  <p className="text-[8px] font-bold text-zinc-600 uppercase">Operador</p>
                  <select 
                    value={condition.attributes?.operator || 'EQUAL'}
                    onChange={(e) => handleChange(`${path}.attributes.operator`, e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 p-2 text-[10px] text-zinc-300 outline-none font-mono"
                  >
                    <option value="EQUAL">EQUAL (==)</option>
                    <option value="NOT_EQUAL">NOT_EQUAL (!=)</option>
                    <option value="GREATER_THAN">GREATER_THAN (&gt;)</option>
                    <option value="GREATER_THAN_OR_EQUAL">GREATER_THAN_OR_EQUAL (&gt;=)</option>
                    <option value="LESS_THAN">LESS_THAN (&lt;)</option>
                    <option value="LESS_THAN_OR_EQUAL">LESS_THAN_OR_EQUAL (&lt;=)</option>
                  </select>
               </div>
             )}

             <div className="space-y-1">
                <p className="text-[8px] font-bold text-zinc-600 uppercase">Valor Esperado</p>
                <input 
                  type={condition.type === 'NUMERIC' ? 'number' : 'text'}
                  value={condition.attributes?.expectedValue || ''}
                  onChange={(e) => {
                    const val = condition.type === 'NUMERIC' ? parseFloat(e.target.value) : e.target.value;
                    handleChange(`${path}.attributes.expectedValue`, val);
                  }}
                  className="w-full bg-zinc-900 border border-zinc-800 p-2 text-[10px] text-zinc-300 outline-none"
                  placeholder={condition.type === 'NUMERIC' ? 'Ex: 18, 100...' : 'Ex: sim, true...'}
                />
             </div>
          </div>
        )}
      </div>
    );
  };

  const renderQuizPanel = () => (
    <div className="p-6 flex-1 overflow-y-auto space-y-8 custom-scrollbar">
       {/* Info Header */}
       <section className="space-y-4">
          <div className="p-4 bg-blue-600/5 border border-blue-500/20 rounded-none relative overflow-hidden">
             <div className="absolute top-0 right-0 p-2 opacity-10"><Layers size={64} /></div>
             <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1">Entidade Raiz</p>
             <h2 className="text-lg font-bold text-white truncate pr-12">{data.nome}</h2>
             <p className="text-[9px] font-mono text-zinc-600 mt-2">ID: {data.id}</p>
          </div>
       </section>

       {/* Detalhes do Questionário */}
       <section className="space-y-4">
          <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
            <FileText size={14} className="text-blue-500" /> Informações do Questionário
          </label>
          <div className="p-4 bg-zinc-900/30 border border-zinc-800 space-y-4">
             <div className="space-y-2">
                <p className="text-[9px] font-bold text-zinc-600 uppercase">Descrição / Nome Exibição</p>
                <input 
                  value={data.nome || ''} 
                  onChange={e => handleChange('nome', e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 p-3 text-xs text-white outline-none focus:border-blue-600 transition-all"
                />
             </div>
             <div className="space-y-2">
                <p className="text-[9px] font-bold text-zinc-600 uppercase">Status do Fluxo</p>
                <select 
                  value={data.status || 'DRAFT'} 
                  onChange={e => handleChange('status', e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 p-3 text-xs text-white outline-none focus:border-blue-600 appearance-none"
                >
                  <option value="ACTIVE">ACTIVE (Em Produção)</option>
                  <option value="DRAFT">DRAFT (Rascunho)</option>
                  <option value="INACTIVE">INACTIVE (Desativado)</option>
                </select>
             </div>
          </div>
       </section>

       {/* Distribuição */}
       <section className="space-y-4">
          <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
            <Globe size={14} className="text-amber-500" /> Estratégia de Distribuição
          </label>
          <div className="grid grid-cols-1 gap-4 p-4 bg-zinc-900/30 border border-zinc-800">
             <div className="space-y-2">
                <p className="text-[9px] font-bold text-zinc-600 uppercase flex items-center gap-2 text-zinc-500"><Globe size={10}/> Canal (Distribution ID)</p>
                <p className="p-3 bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-400 select-all">{data.channelDistributionId}</p>
             </div>
             <div className="space-y-2">
                <p className="text-[9px] font-bold text-zinc-600 uppercase flex items-center gap-2 text-zinc-500"><Map size={10}/> Jornada (Journey ID)</p>
                <p className="p-3 bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-400 select-all">{data.journeyDistributionId}</p>
             </div>
          </div>
          <p className="text-[9px] text-zinc-600 italic px-2 leading-relaxed">
            * A distribuição é imutável para esta instância. Para mudar o canal/jornada, crie um novo questionário.
          </p>
       </section>

       {/* Auditoria */}
       <section className="space-y-4">
          <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
            <User size={14} className="text-zinc-600" /> Auditoria de Criação
          </label>
          <div className="p-4 bg-zinc-900/30 border border-zinc-800 space-y-4 text-[10px]">
             <div className="flex justify-between items-center py-1 border-b border-zinc-800/50">
                <span className="text-zinc-600">Criado por:</span>
                <span className="font-bold text-zinc-300">{data.createdBy?.name || 'Sistema'}</span>
             </div>
             <div className="flex justify-between items-center py-1">
                <span className="text-zinc-600">Data de Criação:</span>
                <span className="font-mono text-zinc-400 flex items-center gap-1"><Clock size={10}/> {data.createdAt ? new Date(data.createdAt).toLocaleDateString() : 'N/A'}</span>
             </div>
          </div>
       </section>
    </div>
  );

  const renderQuestionPanel = () => (
    <div className="p-6 flex-1 overflow-y-auto space-y-8 custom-scrollbar">
       {/* Resumo da Questão */}
       <section className="space-y-3">
          <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] block">Questão Identificada</label>
          <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-none flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-zinc-200">{data.label || 'Sem título'}</p>
              <p className="text-[9px] font-mono text-zinc-600 mt-2 uppercase tracking-tighter">ID: {data.id}</p>
            </div>
            <div className={`text-[8px] font-black px-2 py-1 ${data.status === 'ACTIVE' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'bg-zinc-800 text-zinc-500 border border-zinc-700'}`}>
              {data.status || 'DRAFT'}
            </div>
          </div>
       </section>

       {/* Answer Config */}
       <section className="space-y-4">
          <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
            <FileJson size={14} className="text-blue-500" /> Configuração de Resposta
          </label>
          <div className="space-y-4 p-4 bg-zinc-900/30 border border-zinc-800">
             <div className="space-y-2">
                <p className="text-[9px] font-bold text-zinc-600 uppercase">Estratégia de Validação (Type)</p>
                <select 
                  value={config.answerConfig?.type || 'TEXT'}
                  onChange={(e) => handleChange('answerConfig.type', e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded-none text-xs focus:border-blue-600 outline-none appearance-none"
                >
                  <option value="TEXT">TEXT Strategy</option>
                  <option value="NUMBER">NUMBER Strategy</option>
                  <option value="DATE">DATE Strategy</option>
                  <option value="OPTION_LIST">OPTION_LIST Strategy</option>
                </select>
             </div>

             {config.answerConfig?.type === 'TEXT' && (
                <div className="space-y-2 pt-2">
                   <p className="text-[9px] font-bold text-zinc-600 uppercase">Regex Pattern</p>
                   <input placeholder="Ex: ^[A-Z]{3}-\\d{4}$" value={config.answerConfig?.attributes?.regexPattern || ''} onChange={e => handleChange('answerConfig.attributes.regexPattern', e.target.value)} className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded-none text-xs outline-none focus:border-blue-600 font-mono" />
                </div>
             )}

             {config.answerConfig?.type === 'NUMBER' && (
                <div className="grid grid-cols-2 gap-3 pt-2">
                   <div className="space-y-1"><p className="text-[8px] font-bold text-zinc-600">MIN</p><input type="number" value={config.answerConfig?.attributes?.min ?? ''} onChange={e => handleChange('answerConfig.attributes.min', parseFloat(e.target.value))} className="w-full bg-zinc-950 border border-zinc-800 p-2 text-xs" /></div>
                   <div className="space-y-1"><p className="text-[8px] font-bold text-zinc-600">MAX</p><input type="number" value={config.answerConfig?.attributes?.max ?? ''} onChange={e => handleChange('answerConfig.attributes.max', parseFloat(e.target.value))} className="w-full bg-zinc-950 border border-zinc-800 p-2 text-xs" /></div>
                </div>
             )}

             {config.answerConfig?.type === 'OPTION_LIST' && (
                <div className="space-y-3 pt-2">
                   <div className="flex justify-between items-center"><p className="text-[9px] font-bold text-zinc-600 uppercase">Opções</p><button onClick={() => {
                      const options = config.answerConfig?.attributes?.answerOptions || [];
                      handleChange('answerConfig.attributes.answerOptions', [...options, { value: '', label: '' }]);
                   }} className="text-blue-500 text-[9px] font-black uppercase">+ ADD</button></div>
                   <div className="space-y-2 max-h-32 overflow-y-auto">
                      {(config.answerConfig?.attributes?.answerOptions || []).map((opt, idx) => (
                        <div key={idx} className="flex gap-2">
                          <input 
                            placeholder="Label" 
                            value={opt.label} 
                            onChange={e => {
                              const options = config.answerConfig.attributes.answerOptions.map((o, i) => 
                                i === idx ? { ...o, label: e.target.value } : o
                              );
                              handleChange('answerConfig.attributes.answerOptions', options);
                            }} 
                            className="flex-1 bg-zinc-950 border border-zinc-800 p-2 text-[10px]" 
                          />
                          <input 
                            placeholder="Val" 
                            value={opt.value} 
                            onChange={e => {
                              const options = config.answerConfig.attributes.answerOptions.map((o, i) => 
                                i === idx ? { ...o, value: e.target.value } : o
                              );
                              handleChange('answerConfig.attributes.answerOptions', options);
                            }} 
                            onKeyDown={e => {
                              if (e.key === 'Tab' && !e.shiftKey && idx === (config.answerConfig.attributes.answerOptions.length - 1)) {
                                // Se for o último campo de valor e apertar TAB, adiciona nova linha
                                const options = config.answerConfig.attributes.answerOptions || [];
                                handleChange('answerConfig.attributes.answerOptions', [...options, { value: '', label: '' }]);
                              }
                            }}
                            className="w-16 bg-zinc-950 border border-zinc-800 p-2 text-[10px]" 
                          />
                          <button 
                            onClick={() => {
                              const options = config.answerConfig.attributes.answerOptions.filter((_, i) => i !== idx);
                              handleChange('answerConfig.attributes.answerOptions', options);
                            }}
                            className="p-2 text-red-500 hover:bg-red-500/10"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      ))}
                   </div>
                </div>
             )}

             <div className="pt-4 border-t border-zinc-800/50">
                <p className="text-[9px] font-bold text-zinc-600 uppercase mb-2">Mensagem de Erro Customizada</p>
                <textarea rows={2} value={config.answerConfig?.attributes?.customErrorMessage || ''} onChange={e => handleChange('answerConfig.attributes.customErrorMessage', e.target.value)} className="w-full bg-zinc-950 border border-zinc-800 p-3 text-xs outline-none resize-none focus:border-blue-600" placeholder="Ex: Valor fora do permitido..." />
             </div>
          </div>
       </section>

       {/* Condições Compostas */}
       <section className="space-y-4">
          <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
            <Zap size={14} className="text-amber-500" /> Lógica Condicional (Recursiva)
          </label>
          <div className="p-4 bg-zinc-900/30 border border-zinc-800 space-y-4">
             <div className="flex items-center gap-3">
                <input type="checkbox" checked={!!config.rootCondition} onChange={e => handleChange('rootCondition', e.target.checked ? { type: 'EQUAL', attributes: { questionRootCode: '', expectedValue: '' }, children: [] } : null)} className="w-4 h-4 accent-blue-600" />
                <span className="text-xs font-bold text-zinc-300">Ativar Regra Complexa</span>
             </div>
             {config.rootCondition && renderConditionEditor(config.rootCondition)}
          </div>
       </section>

       {/* Auditoria Vínculo */}
       <section className="space-y-4">
          <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
            <ListOrdered size={14} className="text-zinc-600" /> Configuração do Vínculo
          </label>
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-1">
                <p className="text-[8px] font-bold text-zinc-600 uppercase">Ordem de Exibição</p>
                <input type="number" value={config.order || 0} onChange={e => handleChange('order', parseInt(e.target.value))} className="w-full bg-zinc-900 border border-zinc-800 p-3 text-xs" />
             </div>
             <div className="space-y-1">
                <p className="text-[8px] font-bold text-zinc-600 uppercase">Referência de Venda</p>
                <p className="p-3 bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-500 truncate">{data.salesItemReferenceCode || 'N/A'}</p>
             </div>
          </div>
       </section>
    </div>
  );

  return (
    <Panel position="top-right" className="m-0 h-full">
      <motion.div 
        initial={{ x: 400, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 400, opacity: 0 }}
        className="w-[400px] bg-zinc-950 border-l border-zinc-800 shadow-2xl flex flex-col h-[calc(100vh-65px)]"
      >
        <div className="p-6 bg-zinc-900/50 border-b border-zinc-800 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-none border ${isQuiz ? 'bg-blue-600/10 border-blue-500/20' : 'bg-zinc-800 border-zinc-700'}`}>
              {isQuiz ? <Layers size={16} className="text-blue-500" /> : <Settings size={16} className="text-zinc-400" />}
            </div>
            <div>
              <h3 className="text-[11px] font-black uppercase tracking-widest text-white">
                {isQuiz ? 'Configuração Global' : 'Configuração do Vínculo'}
              </h3>
              <p className="text-[9px] text-zinc-500 font-bold uppercase mt-1">
                {isQuiz ? 'Questionário de Domínio' : 'Lógica da Pergunta'}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-all p-2 hover:bg-zinc-800">
            <ChevronRight size={20} />
          </button>
        </div>

        {isQuiz ? renderQuizPanel() : renderQuestionPanel()}

        <div className="p-6 bg-zinc-900/80 border-t border-zinc-800 flex gap-3">
          {!isQuiz && (
            <button 
              onClick={() => onDelete(node.id)}
              className="flex-1 bg-red-950/20 hover:bg-red-900/40 text-red-500 border border-red-900/50 p-4 rounded-none text-[10px] font-black uppercase flex items-center justify-center gap-2 transition-all"
            >
              <Trash2 size={16} /> Excluir do Fluxo
            </button>
          )}
          {isQuiz && (
            <div className="flex-1 text-[9px] text-zinc-600 font-bold uppercase text-center py-4 border border-zinc-800 border-dashed">
              Configurações de Instância Protegidas
            </div>
          )}
        </div>
      </motion.div>
    </Panel>
  );
}
