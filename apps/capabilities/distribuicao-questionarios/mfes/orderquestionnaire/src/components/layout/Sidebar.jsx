import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Search, Plus, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { dataService } from 'shared-data';
import { DESIGNER_FLOWS } from '../../constants/flows';

export function Sidebar({ 
  perguntas, 
  selecionadas, 
  toggleSelecao, 
  adicionarSelecionadas,
  filtersQuestions,
  setFiltersQuestions,
  termoBuscaBiblioteca,
  setTermoBuscaBiblioteca,
  isLoadingQuestions,
  isFetchingMoreQuestions,
  hasNextQuestions,
  nextCursorQuestions,
  onLoadMore
}) {
  const observerRef = useRef();

  const lastElementRef = useCallback(node => {
    if (isLoadingQuestions || isFetchingMoreQuestions) return;
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasNextQuestions && nextCursorQuestions) {
        onLoadMore(nextCursorQuestions, true);
      }
    });
    if (node) observerRef.current.observe(node);
  }, [isLoadingQuestions, isFetchingMoreQuestions, hasNextQuestions, nextCursorQuestions, onLoadMore]);

  return (
    <aside className="w-80 bg-zinc-900 border-r border-zinc-800 flex flex-col z-10 shadow-2xl">
      <div className="p-5 border-b border-zinc-800 space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Biblioteca de Questões</h4>
          <span className="text-[9px] bg-zinc-800 px-2 py-0.5 text-zinc-400 font-mono">{perguntas.length}</span>
        </div>
        <div className="relative">
          <Search size={14} className="absolute left-3 top-3.5 text-zinc-600" />
          <input 
            className="w-full bg-zinc-950 border border-zinc-800 p-3.5 pl-10 rounded-none text-xs outline-none focus:border-blue-600 transition-all placeholder:text-zinc-700"
            placeholder="Pressione Enter para buscar..."
            value={termoBuscaBiblioteca}
            onChange={e => setTermoBuscaBiblioteca(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && setFiltersQuestions(f => ({ ...f, buscaValor: termoBuscaBiblioteca }))}
          />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {isLoadingQuestions ? (
          <div className="p-8 text-center">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-[10px] text-zinc-500 mt-4 uppercase tracking-widest">Carregando...</p>
          </div>
        ) : (
          <div className="divide-y divide-zinc-800/50">
            {perguntas.map((p, idx) => {
              const pId = p?.id;
              const isLast = idx === perguntas.length - 1;
              const key = (pId !== null && pId !== undefined && pId !== '') ? String(pId) : `item-${idx}`;
              return (
                <div 
                  key={key} 
                  ref={isLast ? lastElementRef : null}
                  onClick={() => toggleSelecao(p.id)}
                  className={`p-4 cursor-pointer hover:bg-zinc-800/50 transition-all flex items-center gap-3 ${selecionadas.includes(p.id) ? 'bg-blue-600/10' : ''}`}
                >
                  <div className={`w-4 h-4 rounded-none border flex items-center justify-center transition-all
                    ${selecionadas.includes(p.id) ? 'bg-blue-600 border-blue-600' : 'bg-zinc-900 border-zinc-800'}`}>
                    {selecionadas.includes(p.id) && <Check size={10} strokeWidth={4} />}
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <p className="text-[11px] font-bold truncate text-zinc-200 group-hover:text-white">{p.label}</p>
                    <p className="text-[9px] text-zinc-600 font-mono mt-1 uppercase tracking-tighter">{p.id}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {isFetchingMoreQuestions && <div className="text-[9px] text-center p-2 text-zinc-500 animate-pulse font-bold uppercase">Carregando mais...</div>}
        
        {!isLoadingQuestions && perguntas.length === 0 && (
          <div className="text-center py-10">
            <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Nenhuma questão encontrada</p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selecionadas.length > 0 && (
          <motion.button
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            onClick={adicionarSelecionadas}
            className="w-full bg-blue-600 hover:bg-blue-500 p-4 rounded-none text-[10px] font-black flex items-center justify-center gap-2 uppercase shadow-lg shadow-blue-600/20"
          >
            Incluir {selecionadas.length} no fluxo <Plus size={14} />
          </motion.button>
        )}
      </AnimatePresence>
    </aside>
  );
}