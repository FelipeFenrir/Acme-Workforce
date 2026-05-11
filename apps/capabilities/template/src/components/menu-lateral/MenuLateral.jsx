import React from 'react';
import { ChevronLeft, ChevronRight, LogOut } from 'lucide-react';

export function MenuLateral({ mfes, mfeAtivo, isCollapsed, onToggleCollapse, onTrocaMFE, capabilityTitle }) {

  const handleVoltarHub = () => {
    window.parent.postMessage({ type: 'VOLTAR_HUB' }, '*');
  };

  return (
    <aside className={`bg-zinc-900 border-r border-zinc-800 transition-all duration-300 relative flex flex-col ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <button
        onClick={onToggleCollapse}
        className="absolute -right-3 top-10 bg-zinc-700 rounded-none p-1 z-50 hover:bg-zinc-600"
      >
        {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      <div className="p-6 border-b border-zinc-800 flex flex-col gap-4">
        <button
          onClick={handleVoltarHub}
          title="Voltar ao Hub"
          className="flex items-center gap-2 text-[10px] font-black text-zinc-500 hover:text-white transition-colors uppercase tracking-widest"
        >
          <LogOut size={12} />
          <span className={isCollapsed ? 'hidden' : 'block'}>Voltar ao Hub</span>
        </button>
        {!isCollapsed && <h2 className="text-sm font-bold text-zinc-300 leading-tight">{capabilityTitle}</h2>}
      </div>

      <nav className="flex-1 p-3 flex flex-col gap-2 mt-4">
        {mfes.map((mfe) => (
          <button
            key={mfe.id}
            onClick={() => onTrocaMFE(mfe.url)}
            title={isCollapsed ? mfe.label : ""}
            className={`flex items-center gap-4 p-3 rounded-none text-sm font-medium transition-all group
              ${mfeAtivo === mfe.url ? 'bg-zinc-800 text-white border-l-2 border-blue-600' : 'hover:bg-zinc-800 text-zinc-500'}
              ${isCollapsed ? 'justify-center' : ''}`}
          >
            <span className={mfeAtivo === mfe.url ? 'text-blue-500' : 'group-hover:text-zinc-300'}>
              {mfe.icon}
            </span>
            {!isCollapsed && <span className="whitespace-nowrap">{mfe.label}</span>}
          </button>
        ))}
      </nav>
    </aside>
  );
}
