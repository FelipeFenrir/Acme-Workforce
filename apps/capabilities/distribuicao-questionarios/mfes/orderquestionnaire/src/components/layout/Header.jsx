import React from 'react';
import { Search, LayoutGrid, Save, Layers } from 'lucide-react';

export function Header({ 
  busca, 
  setBusca, 
  quizAtivo, 
  onOpenSearch, 
  onAutoLayout, 
  onSave 
}) {
  return (
    <header className="p-4 bg-zinc-900 border-b border-zinc-800 flex gap-4 items-center z-10">
      <div className="flex items-center gap-3 mr-6">
        <div className="p-2 bg-blue-600/10 border border-blue-500/20">
          <Layers size={16} className="text-blue-500" />
        </div>
        <div>
          <h2 className="text-[11px] font-black uppercase tracking-widest text-white leading-none">Designer de Questionário</h2>
          <p className="text-[9px] font-bold text-zinc-500 uppercase mt-1">Acme Workforce</p>
        </div>
      </div>
      
      <div className="flex items-center gap-0">
        <div className="relative flex items-center group">
          <Search size={14} className="absolute left-3 text-zinc-600 group-focus-within:text-blue-500 transition-all" />
          <input 
            className="bg-zinc-950 border border-zinc-800 border-r-0 p-2.5 pl-10 rounded-none text-xs w-64 focus:border-blue-600 outline-none transition-all placeholder:text-zinc-700" 
            placeholder="ID ou Nome do Questionário..." 
            value={busca} 
            onChange={e => setBusca(e.target.value)} 
            onKeyDown={e => e.key === 'Enter' && onOpenSearch()}
          />
        </div>
        <button
          onClick={onOpenSearch}
          className="bg-blue-600 hover:bg-blue-500 border border-blue-600 p-2.5 transition-all active:scale-95 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest"
          title="Abrir consulta de questionários"
        >
          <LayoutGrid size={14} />
        </button>
      </div>

      {quizAtivo && (
        <div className="flex items-center gap-3 px-4 py-2 bg-blue-600/5 border border-blue-500/20">
          <div className="w-1.5 h-1.5 bg-blue-500 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-tight text-blue-400 truncate max-w-[200px]">
            Ativo: {quizAtivo.nome}
          </span>
          <span className={`text-[8px] font-black px-1.5 py-0.5 rounded-none border ${quizAtivo.status === 'ACTIVE' ? 'bg-emerald-500/20 text-emerald-500 border-emerald-500/30' : 'bg-zinc-800 text-zinc-500 border-zinc-700'}`}>
            {quizAtivo.status}
          </span>
        </div>
      )}

      <div className="ml-auto flex gap-2">
        <button onClick={onAutoLayout} className="bg-zinc-800 hover:bg-zinc-700 px-5 py-2.5 rounded-none text-[10px] font-black border border-zinc-700 uppercase transition-all active:scale-95">Auto Layout</button>
        <button onClick={onSave} disabled={!quizAtivo} className="bg-blue-600 hover:bg-blue-500 disabled:opacity-30 px-6 py-2.5 rounded-none text-[10px] font-black uppercase flex items-center gap-2 transition-all active:scale-95">
          <Save size={14} /> Sincronizar API
        </button>
      </div>
    </header>
  );
}