import React, { useState, useEffect, useRef } from 'react';
import { dataService } from 'shared-data';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [list, setList] = useState([]);
  const [form, setForm] = useState({ label: '', id: '', codigo: '', status: 'DRAFT' });
  const [editingId, setEditingId] = useState(null);
  const [abaAtiva, setAbaAtiva] = useState('lista');
  const [isLoading, setIsLoading] = useState(true);
  const [nextCursor, setNextCursor] = useState(null);
  const [hasNext, setHasNext] = useState(false);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [filters, setFilters] = useState({ buscaValor: '', buscaTipo: 'NOME', status: 'ALL' });
  const [sort, setSort] = useState('createdAt,desc');
  const [buscaInput, setBuscaInput] = useState('');
  const [buscaTipo, setBuscaTipo] = useState('NOME');
  const [isFallback, setIsFallback] = useState(dataService.isFallbackActive);
  const observer = useRef();

  const carregar = async (cursor = null, append = false) => {
    if (!append) setIsLoading(true);
    else setIsFetchingMore(true);

    try {
      const { data, meta } = await dataService.getPerguntas({ cursor, filters, sort });
      if (append) {
        setList(prev => {
          const newIds = new Set(data.map(d => d.id));
          const filteredPrev = prev.filter(p => !newIds.has(p.id));
          return [...filteredPrev, ...data];
        });
      } else {
        setList(data);
      }
      setHasNext(meta?.hasNext || false);
      setNextCursor(meta?.nextCursor || null);
    } catch (err) { console.error(err); }
    finally { 
      setIsLoading(false); 
      setIsFetchingMore(false);
    }
  };

  useEffect(() => { carregar(); }, [filters, sort]);

  useEffect(() => {
    return dataService.subscribeToFallback(setIsFallback);
  }, []);

  const lastElementRef = React.useCallback(node => {
    if (isLoading || isFetchingMore) return;
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasNext && abaAtiva === 'lista') {
        carregar(nextCursor, true);
      }
    }, { threshold: 0.1 });
    
    if (node) observer.current.observe(node);
  }, [isLoading, isFetchingMore, hasNext, nextCursor, abaAtiva]);

  const salvar = async () => {
    if (!form.label || !form.id) return alert("Campos obrigatórios!");

    try {
      if (editingId) {
        const payload = { 
          label: form.label, 
          salesItemReferenceCode: form.codigo,
          status: form.status,
          updatedBy: {
            id: "019dff07-5f02-70d4-8680-f8dc34fd5fb9",
            referenceCode: "sys-admin",
            name: "Administrador",
            email: "admin@acme.com"
          }
        };
        await dataService.updatePergunta(editingId, payload);
      } else {
        const idSnake = form.id.toLowerCase().trim().replace(/\s+/g, '_').replace(/[^\w]/g, '');
        const payload = { 
          id: idSnake, 
          label: form.label, 
          salesItemReferenceCode: form.codigo,
          createdBy: {
            id: "019dff07-5f02-70d4-8680-f8dc34fd5fb9",
            referenceCode: "sys-admin",
            name: "Administrador",
            email: "admin@acme.com"
          }
        };
        await dataService.addPergunta(payload);
      }
      setForm({ label: '', id: '', codigo: '', status: 'DRAFT' });
      setEditingId(null);
      setAbaAtiva('lista');
      carregar();
    } catch (err) { alert("Erro na API"); }
  };

  const excluir = async (id) => {
    const vinculado = await dataService.isItemVinculado(id, 'perguntaNode');
    if (vinculado) return alert("⚠️ Esta pergunta está sendo usada em um fluxo e não pode ser removida.");
    if (!confirm("Deseja excluir esta questão?")) return;
    try {
      await dataService.deletePergunta(id);
      carregar();
    } catch (err) { alert("Erro ao excluir."); }
  };

  const Skeleton = () => (
    <div className="space-y-3">
      {[1, 2, 3].map(i => (
        <div key={i} className="p-5 bg-zinc-900/40 border border-zinc-800 rounded-none flex justify-between items-center animate-pulse">
          <div className="space-y-2 w-1/2"><div className="h-4 bg-zinc-800 rounded-none w-3/4" /><div className="h-3 bg-zinc-800 rounded-none w-1/4" /></div>
          <div className="h-8 w-16 bg-zinc-800 rounded-none" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="p-8 bg-zinc-950 text-white min-h-screen font-sans">
      <header className="flex justify-between items-center mb-10 border-b border-zinc-900 pb-6">
        <div>
          <h2 className="text-2xl font-black text-zinc-100 tracking-tighter uppercase">Questões</h2>
          <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-1">Database Management</p>
        </div>
        <div className="flex gap-1 bg-zinc-900 p-1 rounded-none border border-zinc-800">
          <button onClick={() => setAbaAtiva('lista')} className={`px-6 py-2 rounded-none text-xs font-bold transition-all ${abaAtiva === 'lista' ? 'bg-blue-600 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>Questões Ativas</button>
          <button onClick={() => { setAbaAtiva('form'); setEditingId(null); setForm({label:'', id:'', codigo:'', status:'DRAFT'}); }} className={`px-6 py-2 rounded-none text-xs font-bold transition-all ${abaAtiva === 'form' ? 'bg-blue-600 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>{editingId ? 'Editando' : 'Nova Questão'}</button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {abaAtiva === 'lista' ? (
            <motion.div key="lista" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              
              <div className="flex gap-4 mb-6 bg-zinc-900 p-4 border border-zinc-800 rounded-none items-center">
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
                    onKeyDown={e => e.key === 'Enter' && setFilters(f => ({ ...f, buscaValor: buscaInput, buscaTipo }))}
                  />
                </div>
                <button 
                  onClick={() => setFilters(f => ({ ...f, buscaValor: buscaInput, buscaTipo }))}
                  className="bg-zinc-800 hover:bg-zinc-700 px-4 py-2 text-xs font-bold transition-all border border-zinc-700 uppercase"
                >
                  Buscar
                </button>
                <select 
                  className="bg-zinc-950 border border-zinc-800 p-2 rounded-none text-xs focus:border-blue-600 outline-none"
                  value={filters.status}
                  onChange={e => setFilters(f => ({ ...f, status: e.target.value }))}
                >
                  <option value="ALL">Todos os Status</option>
                  <option value="ACTIVE">Ativos</option>
                  <option value="INACTIVE">Inativos</option>
                  <option value="DRAFT">Rascunhos</option>
                </select>
                <select 
                  className="bg-zinc-950 border border-zinc-800 p-2 rounded-none text-xs focus:border-blue-600 outline-none"
                  value={sort}
                  onChange={e => setSort(e.target.value)}
                >
                  <option value="createdAt,desc">Mais recentes</option>
                  <option value="createdAt,asc">Mais antigas</option>
                  <option value="label,asc">Nome (A-Z)</option>
                  <option value="label,desc">Nome (Z-A)</option>
                </select>
              </div>

              {isLoading ? <Skeleton /> : (
                <div className="space-y-3">
                  {list.map(q => (
                    <div key={q.id} className="p-5 bg-zinc-900/40 border border-zinc-800 rounded-none flex justify-between items-center group hover:border-blue-500/40 transition-all">
                      <div>
                        <h3 className="font-bold text-zinc-200 flex items-center gap-2">
                          {q.label}
                          <span className={`text-[9px] px-2 py-0.5 font-bold uppercase tracking-widest border ${
                            q.status === 'ACTIVE' ? 'bg-emerald-600/20 text-emerald-500 border-emerald-500/20' : 
                            q.status === 'INACTIVE' ? 'bg-red-600/20 text-red-500 border-red-500/20' : 
                            'bg-zinc-800 text-zinc-400 border-zinc-700'
                          }`}>
                            {q.status || 'DRAFT'}
                          </span>
                        </h3>
                        <div className="flex gap-3 mt-1 text-[10px] font-mono text-zinc-500"><span className="text-blue-500">{q.id}</span>{q.salesItemReferenceCode && <span>| SKU: {q.salesItemReferenceCode}</span>}</div>
                      </div>
                      <div className="flex gap-4">
                        <button onClick={() => { setEditingId(q.id); setForm({label: q.label, id: q.id, codigo: q.salesItemReferenceCode || '', status: q.status || 'DRAFT'}); setAbaAtiva('form'); }} className="text-blue-400 text-[10px] font-black uppercase hover:underline transition-all">Editar</button>
                        <button onClick={() => excluir(q.id)} className="text-red-500 text-[10px] font-black uppercase hover:underline transition-all">Excluir</button>
                      </div>
                    </div>
                  ))}
                  {list.length === 0 && <p className="text-center text-zinc-600 py-10 italic">Nenhuma questão encontrada.</p>}
                  
                  {/* Ponto de observação para Scroll Infinito */}
                  {hasNext && (
                    <div ref={lastElementRef} className="py-4 text-center">
                      <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest animate-pulse">
                        {isFetchingMore ? "Carregando..." : "Rolar para carregar mais"}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div key="form" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="max-w-md mx-auto space-y-4 bg-zinc-900 p-10 rounded-none border border-zinc-800">
              <div className="text-center mb-6"><h3 className="text-xl font-bold">{editingId ? 'Atualizar Pergunta' : 'Nova Pergunta'}</h3><p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Preencha os campos abaixo</p></div>
              <input placeholder="ID Único" disabled={!!editingId} className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-none font-mono text-sm focus:border-blue-600 outline-none disabled:opacity-30" value={form.id} onChange={e => setForm({...form, id: e.target.value})} />
              <input placeholder="Título / Pergunta" className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-none text-sm focus:border-blue-600 outline-none" value={form.label} onChange={e => setForm({...form, label: e.target.value})} />
              <input placeholder="Código de Venda" className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-none text-sm focus:border-blue-600 outline-none" value={form.codigo} onChange={e => setForm({...form, codigo: e.target.value})} />
              {editingId && (
                <select className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-none text-sm focus:border-blue-600 outline-none appearance-none" value={form.status} onChange={e => setForm({...form, status: e.target.value})}>
                  <option value="DRAFT">DRAFT (Rascunho)</option>
                  <option value="ACTIVE">ACTIVE (Ativo)</option>
                  <option value="INACTIVE">INACTIVE (Inativo)</option>
                </select>
              )}
              <div className="flex gap-4">
                <button onClick={() => { setAbaAtiva('lista'); setEditingId(null); setForm({label:'', id:'', codigo:'', status:'DRAFT'}); }} className="w-1/3 bg-zinc-800 p-4 rounded-none font-black uppercase tracking-widest hover:bg-zinc-700 transition-all text-xs">Cancelar</button>
                <button onClick={salvar} className="flex-1 bg-blue-600 p-4 rounded-none font-black uppercase tracking-widest text-xs">{editingId ? 'Salvar Alterações' : 'Salvar na API'}</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <AnimatePresence>
        {isFallback && (
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className="fixed bottom-4 right-4 bg-amber-600/90 backdrop-blur text-white px-4 py-3 font-bold text-xs shadow-2xl flex items-center gap-3 z-50 rounded-none border border-amber-400">
            <span className="text-xl leading-none">⚠️</span>
            <div>
              <p className="uppercase tracking-widest text-[10px]">Modo de Fallback (Mock)</p>
              <p className="font-normal opacity-90 text-[10px] mt-0.5">A API principal não está acessível.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
