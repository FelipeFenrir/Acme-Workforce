import React, { useState, useEffect, useRef, useCallback } from 'react';
import { dataService } from 'shared-data';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, ChevronRight, Filter } from 'lucide-react';
import { DESIGNER_FLOWS } from '../constants/flows';

export const QuestionnaireLookup = ({ isOpen, onClose, onSelect }) => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [nextCursor, setNextCursor] = useState(null);
  const [hasNext, setHasNext] = useState(false);
  
  const [filters, setFilters] = useState({ 
    buscaValor: '', 
    buscaTipo: 'NOME', 
    status: 'ALL', 
    channelId: '', 
    journeyId: '' 
  });
  
  const [tempFilters, setTempFilters] = useState({ ...filters });
  const observer = useRef();

  const carregar = useCallback(async (cursor = null, append = false) => {
    if (!append) setIsLoading(true);
    else setIsFetchingMore(true);

    try {
      const response = await dataService.getQuestionarios({ 
        cursor, 
        size: 8, 
        filters, 
        flowId: DESIGNER_FLOWS.LOAD_DESIGN 
      });

      let newData = response.data || [];
      let meta = response.meta || { hasNext: false, nextCursor: null };

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
  }, [filters]);

  useEffect(() => {
    if (isOpen) carregar();
  }, [isOpen, carregar]);

  const lastElementRef = useCallback(node => {
    if (isLoading || isFetchingMore) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasNext && nextCursor) {
        carregar(nextCursor, true);
      }
    });
    if (node) observer.current.observe(node);
  }, [isLoading, isFetchingMore, hasNext, nextCursor, carregar]);

  const handleSearch = () => {
    setFilters({ ...tempFilters });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }} 
        animate={{ opacity: 1, scale: 1, y: 0 }} 
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-zinc-950 border border-zinc-800 rounded-none w-full max-w-3xl shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="p-8 border-b border-zinc-900 bg-zinc-900/50 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Selecionar Questionário</h2>
            <p className="text-[10px] text-zinc-500 font-bold tracking-[0.2em] uppercase mt-2">Escolha um contexto para carregar no Designer</p>
          </div>
          <button onClick={onClose} className="text-zinc-600 hover:text-white p-2 transition-all">
            <X size={24} />
          </button>
        </div>

        {/* Filters */}
        <div className="p-6 bg-zinc-900/30 border-b border-zinc-900 flex flex-wrap gap-3">
          <div className="flex flex-1 min-w-[200px]">
            <select 
              className="bg-zinc-950 border border-zinc-800 border-r-0 p-2.5 text-[10px] font-bold uppercase tracking-widest text-zinc-500 outline-none focus:border-blue-600"
              value={tempFilters.buscaTipo}
              onChange={e => setTempFilters({...tempFilters, buscaTipo: e.target.value})}
            >
              <option value="NOME">Nome</option>
              <option value="ID">ID Exato</option>
            </select>
            <input 
              className="flex-1 bg-zinc-950 border border-zinc-800 p-2.5 text-xs outline-none focus:border-blue-600"
              placeholder={tempFilters.buscaTipo === 'NOME' ? "Buscar por nome..." : "Buscar por ID..."}
              value={tempFilters.buscaValor}
              onChange={e => setTempFilters({...tempFilters, buscaValor: e.target.value})}
              onKeyDown={e => e.key === 'Enter' && handleSearch()}
            />
          </div>
          
          <input 
            className="w-32 bg-zinc-950 border border-zinc-800 p-2.5 text-xs outline-none focus:border-blue-600"
            placeholder="Canal..."
            value={tempFilters.channelId}
            onChange={e => setTempFilters({...tempFilters, channelId: e.target.value})}
          />
          
          <input 
            className="w-32 bg-zinc-950 border border-zinc-800 p-2.5 text-xs outline-none focus:border-blue-600"
            placeholder="Jornada..."
            value={tempFilters.journeyId}
            onChange={e => setTempFilters({...tempFilters, journeyId: e.target.value})}
          />

          <select 
            className="bg-zinc-950 border border-zinc-800 p-2.5 text-[10px] font-bold uppercase tracking-widest text-zinc-500 outline-none focus:border-blue-600"
            value={tempFilters.status}
            onChange={e => setTempFilters({...tempFilters, status: e.target.value})}
          >
            <option value="ALL">Status: Todos</option>
            <option value="ACTIVE">Ativos</option>
            <option value="DRAFT">Rascunho</option>
            <option value="INACTIVE">Inativos</option>
          </select>

          <button 
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-500 px-6 py-2.5 text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 flex items-center gap-2"
          >
            <Filter size={14} /> Filtrar
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3 custom-scrollbar min-h-[300px]">
          {isLoading && list.length === 0 ? (
            <div className="space-y-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-20 bg-zinc-900/50 animate-pulse border border-zinc-800" />
              ))}
            </div>
          ) : (
            list.map((q, index) => {
              const statusColor = q.status === 'ACTIVE' ? 'text-emerald-500' : q.status === 'INACTIVE' ? 'text-rose-500' : 'text-zinc-500';
              return (
                <div 
                  key={q.id} 
                  ref={index === list.length - 1 ? lastElementRef : null}
                  onClick={() => onSelect(q)}
                  className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-none cursor-pointer hover:bg-blue-600/5 hover:border-blue-600 transition-all flex justify-between items-center group"
                >
                  <div className="flex-1 overflow-hidden">
                    <div className="flex items-center gap-3">
                      <p className="font-black text-sm text-zinc-300 group-hover:text-white transition-all uppercase truncate">{q.nome}</p>
                      <span className={`text-[8px] font-black uppercase tracking-widest border border-current px-1.5 py-0.5 ${statusColor} bg-zinc-950/50`}>
                        {q.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mt-3">
                      <p className="text-[9px] font-mono text-zinc-600 tracking-widest uppercase truncate max-w-[200px]">{q.id}</p>
                      {q.channelDistributionId && <span className="text-[8px] bg-zinc-800 text-zinc-500 px-1.5 py-0.5 font-bold uppercase tracking-tighter">CH: {q.channelDistributionId}</span>}
                      {q.journeyDistributionId && <span className="text-[8px] bg-zinc-800 text-zinc-500 px-1.5 py-0.5 font-bold uppercase tracking-tighter">JY: {q.journeyDistributionId}</span>}
                    </div>
                  </div>
                  <ChevronRight size={20} className="text-zinc-800 group-hover:text-blue-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              );
            })
          )}

          {isFetchingMore && (
            <div className="text-[10px] text-center p-4 text-zinc-500 animate-pulse font-black uppercase tracking-[0.3em]">
              Buscando mais registros...
            </div>
          )}

          {!isLoading && list.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-zinc-600">
              <Search size={48} className="opacity-10 mb-4" />
              <p className="text-xs font-black uppercase tracking-widest">Nenhum questionário encontrado</p>
              <p className="text-[9px] uppercase tracking-widest mt-2 opacity-50 text-center max-w-[250px]">Tente ajustar os filtros ou verificar os parâmetros de busca.</p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
