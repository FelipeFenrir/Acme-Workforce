import React, { useState, useEffect, useRef } from 'react';
import { dataService } from 'shared-data';
import { motion, AnimatePresence } from 'framer-motion';
import { QUIZ_FLOWS } from './constants/flows';

export default function App() {
  const [list, setList] = useState([]);
  const [form, setForm] = useState({ nome: '', id: '', channel: '', journey: '', status: 'DRAFT' });
  const [isEditing, setIsEditing] = useState(false);
  const [abaAtiva, setAbaAtiva] = useState('lista');
  const [isLoading, setIsLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(dataService.isFallbackActive);

  // Pagination states
  const [nextCursor, setNextCursor] = useState(null);
  const [hasNext, setHasNext] = useState(false);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [isVinculadoModalOpen, setIsVinculadoModalOpen] = useState(false);
  const observer = useRef();

  // Filter states
  const [filters, setFilters] = useState({ buscaValor: '', buscaTipo: 'NOME', status: 'ALL', channelId: '', journeyId: '' });
  const [sort, setSort] = useState('createdAt,desc');
  
  // Input states
  const [buscaInput, setBuscaInput] = useState('');
  const [buscaTipo, setBuscaTipo] = useState('NOME');
  const [channelInput, setChannelInput] = useState('');
  const [journeyInput, setJourneyInput] = useState('');

  const [apiError, setApiError] = useState(null);
  const [apiSuccess, setApiSuccess] = useState(null);

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

  const carregar = async (cursor = null, append = false) => {
    if (!append) setIsLoading(true);
    else setIsFetchingMore(true);

    try {
      const response = await dataService.getQuestionarios({ cursor, size: 10, filters, sort, flowId: QUIZ_FLOWS.LIST });
      let newData = [];
      let meta = { hasNext: false, nextCursor: null };

      if (Array.isArray(response)) {
        newData = response; 
      } else if (response && response.data) {
        newData = response.data;
        meta = response.meta || meta;
      }

      setList(prev => {
        if (!append) return newData;
        const ids = new Set(prev.map(i => i.id));
        const filteredNew = newData.filter(i => !ids.has(i.id));
        return [...prev, ...filteredNew];
      });

      setHasNext(meta.hasNext);
      setNextCursor(meta.nextCursor);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
      setIsFetchingMore(false);
    }
  };

  useEffect(() => { carregar(); }, [filters, sort]);

  const lastElementRef = React.useCallback(node => {
    if (isLoading || isFetchingMore) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasNext && nextCursor) {
        carregar(nextCursor, true);
      }
    });
    if (node) observer.current.observe(node);
  }, [isLoading, isFetchingMore, hasNext, nextCursor]);

  const salvar = async () => {
    if (!form.nome || !form.id) return alert("Campos obrigatórios: Nome e ID!");
    if (!isEditing && (!form.channel || !form.journey)) return alert("Canal e Jornada são obrigatórios para novos questionários!");

    try {
      let result;
      const payload = { ...form, type: 'quizNode' };
      if (isEditing) {
        result = await dataService.updateQuiz(form.id, payload, form.channel, form.journey, QUIZ_FLOWS.UPDATE);
      } else {
        const idSnake = form.id.toLowerCase().trim().replace(/\s+/g, '_').replace(/[^\w]/g, '');
        result = await dataService.addQuiz({ ...payload, id: idSnake }, QUIZ_FLOWS.CREATE);
      }

      if (!result) return; // Se a API retornou erro (4XX), mantemos o form aberto

      setForm({ nome: '', id: '', channel: '', journey: '', status: 'DRAFT' });
      setIsEditing(false);
      setAbaAtiva('lista');
      carregar();
    } catch (err) { /* Erro tratado via Toast */ }
  };

  const handleExcluirClick = async (quiz) => {
    const vinculado = await dataService.isItemVinculado(quiz.id, 'quizNode');
    if (vinculado) return setIsVinculadoModalOpen(true);
    setItemToDelete(quiz);
    setIsDeleteModalOpen(true);
  };

  const confirmarExclusao = async () => {
    if (!itemToDelete) return;
    try {
      await dataService.deleteQuiz(
        itemToDelete.id, 
        itemToDelete.channelDistributionId, 
        itemToDelete.journeyDistributionId, 
        QUIZ_FLOWS.DELETE
      );
      carregar();
    } catch (err) { /* Erro já tratado no dataService */ }
    finally {
      setIsDeleteModalOpen(false);
      setItemToDelete(null);
    }
  };

  const Skeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-none animate-pulse flex justify-between items-center">
          <div className="space-y-2 w-2/3"><div className="h-4 bg-zinc-800 rounded-none w-1/2" /><div className="h-3 bg-zinc-800 rounded-none w-1/3" /></div>
          <div className="h-6 w-12 bg-zinc-800 rounded-none" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="p-8 bg-zinc-950 text-white min-h-screen font-sans">
      <header className="flex justify-between items-center mb-10 border-b border-zinc-900 pb-6">
        <div><h2 className="text-2xl font-black text-zinc-100 tracking-tighter uppercase">Questionários</h2><p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-1">Survey Management</p></div>
        <div className="flex gap-1 bg-zinc-900 p-1 rounded-none border border-zinc-800">
          <button onClick={() => setAbaAtiva('lista')} className={`px-6 py-2 rounded-none text-xs font-bold transition-all ${abaAtiva === 'lista' ? 'bg-blue-600 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>Listagem</button>
          <button onClick={() => { setAbaAtiva('form'); setIsEditing(false); setForm({nome:'', id:'', channel: '', journey: '', status: 'DRAFT'}); }} className={`px-6 py-2 rounded-none text-xs font-bold transition-all ${abaAtiva === 'form' ? 'bg-blue-600 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>{isEditing ? 'Editando' : 'Novo'}</button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          {abaAtiva === 'lista' ? (
            <motion.div key="list-q" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              
              {/* Barra de Filtros */}
              <div className="flex flex-col md:flex-row gap-4 mb-6 bg-zinc-900 p-4 border border-zinc-800 rounded-none items-center">
                <div className="flex-1 flex relative">
                  <select 
                    className="bg-zinc-950 border border-zinc-800 border-r-0 p-2 rounded-none text-xs focus:border-blue-600 outline-none text-zinc-400"
                    value={buscaTipo}
                    onChange={e => setBuscaTipo(e.target.value)}
                  >
                    <option value="NOME">Nome</option>
                    <option value="ID">ID Exato</option>
                  </select>
                  <input 
                    placeholder={buscaTipo === 'NOME' ? "Buscar por nome..." : "Buscar por ID exato..."}
                    className="w-full bg-zinc-950 border border-zinc-800 p-2 pl-3 rounded-none text-xs focus:border-blue-600 outline-none" 
                    value={buscaInput}
                    onChange={e => setBuscaInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && setFilters(f => ({ ...f, buscaValor: buscaInput, buscaTipo, channelId: channelInput, journeyId: journeyInput }))}
                  />
                </div>
                
                <input 
                  placeholder="ID do Canal..." 
                  className="w-32 bg-zinc-950 border border-zinc-800 p-2 pl-3 rounded-none text-xs focus:border-blue-600 outline-none" 
                  value={channelInput}
                  onChange={e => setChannelInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && setFilters(f => ({ ...f, buscaValor: buscaInput, buscaTipo, channelId: channelInput, journeyId: journeyInput }))}
                />
                
                <input 
                  placeholder="ID da Jornada..." 
                  className="w-32 bg-zinc-950 border border-zinc-800 p-2 pl-3 rounded-none text-xs focus:border-blue-600 outline-none" 
                  value={journeyInput}
                  onChange={e => setJourneyInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && setFilters(f => ({ ...f, buscaValor: buscaInput, buscaTipo, channelId: channelInput, journeyId: journeyInput }))}
                />

                <select 
                  className="bg-zinc-950 border border-zinc-800 p-2 rounded-none text-xs focus:border-blue-600 outline-none text-zinc-400"
                  value={filters.status}
                  onChange={e => setFilters(f => ({ ...f, status: e.target.value }))}
                >
                  <option value="ALL">Status: Todos</option>
                  <option value="ACTIVE">Ativos</option>
                  <option value="INACTIVE">Inativos</option>
                  <option value="DRAFT">Rascunho</option>
                </select>

                <select 
                  className="bg-zinc-950 border border-zinc-800 p-2 rounded-none text-xs focus:border-blue-600 outline-none text-zinc-400"
                  value={sort}
                  onChange={e => setSort(e.target.value)}
                >
                  <option value="createdAt,desc">Mais recentes</option>
                  <option value="createdAt,asc">Mais antigos</option>
                  <option value="description,asc">Nome (A-Z)</option>
                  <option value="description,desc">Nome (Z-A)</option>
                </select>

                <button 
                  onClick={() => setFilters(f => ({ ...f, buscaValor: buscaInput, buscaTipo, channelId: channelInput, journeyId: journeyInput }))}
                  className="bg-zinc-800 hover:bg-zinc-700 px-4 py-2 text-xs font-bold transition-all border border-zinc-700 uppercase"
                >
                  Buscar
                </button>
              </div>

              {isLoading && list.length === 0 ? <Skeleton /> : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {list.map((quiz, index) => {
                    const statusColor = quiz.status === 'ACTIVE' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : quiz.status === 'INACTIVE' ? 'bg-rose-500/10 text-rose-500 border-rose-500/20' : 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20';
                    const isLast = index === list.length - 1;
                    return (
                      <div ref={isLast ? lastElementRef : null} key={quiz.id} className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-none flex justify-between items-center group hover:border-blue-500/40 transition-all">
                        <div className="flex-1 overflow-hidden pr-4">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-zinc-100 truncate">{quiz.nome}</h3>
                            <span className={`text-[9px] px-2 py-0.5 border font-black uppercase tracking-widest ${statusColor}`}>
                              {quiz.status || 'DRAFT'}
                            </span>
                          </div>
                          <code className="text-[10px] text-zinc-500 uppercase tracking-widest block truncate mb-1">{quiz.id}</code>
                          <div className="flex gap-2">
                            {quiz.channelDistributionId && <span className="text-[9px] bg-zinc-800 text-zinc-300 px-1 py-0.5 rounded-none font-mono">CH: {quiz.channelDistributionId}</span>}
                            {quiz.journeyDistributionId && <span className="text-[9px] bg-zinc-800 text-zinc-300 px-1 py-0.5 rounded-none font-mono">JY: {quiz.journeyDistributionId}</span>}
                          </div>
                        </div>
                        <div className="flex gap-3 flex-shrink-0">
                          <button onClick={() => { setForm({ ...quiz, channel: quiz.channelDistributionId, journey: quiz.journeyDistributionId }); setIsEditing(true); setAbaAtiva('form'); }} className="text-blue-400 text-[10px] font-black uppercase hover:underline transition-all">Editar</button>
                          <button onClick={() => handleExcluirClick(quiz)} className="text-red-500 text-[10px] font-black uppercase hover:underline transition-all">Excluir</button>
                        </div>
                      </div>
                    );
                  })}
                  {list.length === 0 && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center justify-center py-20 px-4 text-center space-y-4 w-full col-span-full">
                      <div className="text-5xl grayscale opacity-30 mb-2">📜</div>
                      <div>
                        <h4 className="text-sm font-bold text-zinc-300 uppercase tracking-widest">Deserto de Questionários...</h4>
                        <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-2 max-w-[280px] leading-relaxed mx-auto">
                          Não encontramos nenhum questionário com esses filtros. Talvez seja hora de criar uma nova jornada épica?
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>
              )}
              {isFetchingMore && <div className="text-center p-4 mt-4 text-xs text-zinc-500 uppercase font-black tracking-widest animate-pulse">Carregando mais...</div>}
            </motion.div>
          ) : (
            <motion.div key="form-q" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="max-w-md mx-auto space-y-6 bg-zinc-900 p-10 rounded-none border border-zinc-800">
              <div className="text-center">
                <h3 className="text-xl font-bold">{isEditing ? 'Editar Questionário' : 'Novo Questionário'}</h3>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Configurações de Coleta</p>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest block">ID do Questionário</label>
                <input placeholder="Ex: vg_venda_avulsa" disabled={isEditing} className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-none font-mono text-sm focus:border-blue-600 outline-none disabled:opacity-30" value={form.id} onChange={e => setForm({ ...form, id: e.target.value })} />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest block">Nome do Questionário</label>
                <input placeholder="Ex: Questionário de Vendas" className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-none text-sm focus:border-blue-600 outline-none" value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest block">ID do Canal</label>
                <input placeholder="Ex: mobile_app" className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-none text-sm focus:border-blue-600 outline-none" value={form.channel} onChange={e => setForm({ ...form, channel: e.target.value })} />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest block">ID da Jornada</label>
                <input placeholder="Ex: journey_retencao" className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-none text-sm focus:border-blue-600 outline-none" value={form.journey} onChange={e => setForm({ ...form, journey: e.target.value })} />
              </div>

              {isEditing && (
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest block">Status</label>
                  <select className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-none text-sm focus:border-blue-600 outline-none appearance-none" value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}>
                    <option value="DRAFT">DRAFT (Rascunho)</option>
                    <option value="ACTIVE">ACTIVE (Ativo)</option>
                    <option value="INACTIVE">INACTIVE (Inativo)</option>
                  </select>
                </div>
              )}

              <div className="flex gap-4">
                <button onClick={() => { setAbaAtiva('lista'); setIsEditing(false); setForm({nome:'', id:'', channel:'', journey:'', status:'DRAFT'}); }} className="w-1/3 bg-zinc-800 p-4 rounded-none font-black uppercase tracking-widest hover:bg-zinc-700 transition-all text-xs">Cancelar</button>
                <button onClick={salvar} className="flex-1 bg-blue-600 p-4 rounded-none font-black uppercase tracking-widest text-xs">{isEditing ? 'Salvar Alterações' : 'Salvar na API'}</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <AnimatePresence>
        {apiSuccess && (
          <motion.div key="success-toast" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }} className="fixed top-24 right-6 bg-emerald-600 text-white px-6 py-4 shadow-2xl z-[100] border-l-4 border-emerald-400 flex items-center gap-4 max-w-md">
            <div className="bg-emerald-500 p-2"><span className="font-bold">✓</span></div>
            <div className="flex-1">
              <p className="text-[10px] font-black uppercase tracking-widest opacity-70">Sucesso</p>
              <p className="text-xs font-bold mt-0.5">{apiSuccess.message}</p>
            </div>
            <button onClick={() => setApiSuccess(null)} className="opacity-50 hover:opacity-100 transition-all">✕</button>
          </motion.div>
        )}

        {apiError && (
          <motion.div key="error-toast" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }} className="fixed top-24 right-6 bg-red-600 text-white px-6 py-4 shadow-2xl z-[100] border-l-4 border-red-400 flex items-center gap-4 max-w-md">
            <div className="bg-red-500 p-2"><span className="font-bold">!</span></div>
            <div className="flex-1">
              <p className="text-[10px] font-black uppercase tracking-widest opacity-70">
                {apiError.status >= 500 ? 'Erro de Servidor' : 'Falha de Validação'} ({apiError.status})
              </p>
              <p className="text-xs font-bold mt-0.5">{apiError.message}</p>
              {apiError.detail && (
                <p className="text-[10px] mt-2 p-2 bg-black/20 font-medium leading-relaxed border-l border-white/20">
                  {apiError.detail}
                </p>
              )}
            </div>
            <button onClick={() => setApiError(null)} className="opacity-50 hover:opacity-100 transition-all">✕</button>
          </motion.div>
        )}

        {isFallback && (
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className="fixed bottom-4 right-4 bg-amber-600/90 backdrop-blur text-white px-4 py-3 font-bold text-xs shadow-2xl flex items-center gap-3 z-50 rounded-none border border-amber-400">
            <span className="text-xl leading-none">⚠️</span>
            <div>
              <p className="uppercase tracking-widest text-[10px]">Modo de Fallback (Mock)</p>
              <p className="font-normal opacity-90 text-[10px] mt-0.5">A API principal não está acessível.</p>
            </div>
          </motion.div>
        )}

        {isDeleteModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="bg-zinc-900 border border-zinc-800 p-8 max-w-sm w-full text-center space-y-6">
              <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-none flex items-center justify-center mx-auto border border-red-500/20">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
              </div>
              <div>
                <h4 className="text-lg font-bold">Excluir Questionário?</h4>
                <p className="text-xs text-zinc-500 mt-2 uppercase tracking-widest">Esta ação não pode ser desfeita.</p>
              </div>
              <div className="flex gap-4 pt-2">
                <button onClick={() => setIsDeleteModalOpen(false)} className="flex-1 bg-zinc-800 hover:bg-zinc-700 py-3 text-[10px] font-black uppercase tracking-widest transition-all">Cancelar</button>
                <button onClick={confirmarExclusao} className="flex-1 bg-red-600 hover:bg-red-700 py-3 text-[10px] font-black uppercase tracking-widest transition-all">Excluir</button>
              </div>
            </motion.div>
          </div>
        )}

        {isVinculadoModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="bg-zinc-900 border border-zinc-800 p-8 max-w-sm w-full text-center space-y-6">
              <div className="w-16 h-16 bg-amber-500/10 text-amber-500 rounded-none flex items-center justify-center mx-auto border border-amber-500/20">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              </div>
              <div>
                <h4 className="text-lg font-bold">Item Vinculado</h4>
                <p className="text-xs text-zinc-500 mt-2 uppercase tracking-widest leading-relaxed">Este questionário possui vínculos ativos no Designer e não pode ser removido.</p>
              </div>
              <button onClick={() => setIsVinculadoModalOpen(false)} className="w-full bg-zinc-800 hover:bg-zinc-700 py-3 text-[10px] font-black uppercase tracking-widest transition-all">Entendido</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
