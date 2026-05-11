import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Package,
  LogOut
} from 'lucide-react';
import { MenuSuperior } from './components/menu-superior/MenuSuperior';
import './styles.css';

const CAPABILITY_TITLE = 'Distribuição de Ofertas';

function MFESidebar({ mfes, mfeAtivo, isCollapsed, onToggleCollapse, onTrocaMFE, capabilityTitle }) {

  const handleVoltarHub = () => {
    try {
      window.parent.postMessage({ type: 'VOLTAR_HUB' }, '*');
    } catch (e) {
      console.warn('Could not send VOLTAR_HUB message:', e);
    }
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
        {mfes.length === 0 ? (
          <div className="text-zinc-500 text-xs p-4 text-center">
            Nenhum MFE disponível ainda.
            <br />
            <span className="text-zinc-600 text-[10px]">Implemente em mfes/</span>
          </div>
        ) : (
          mfes.map((mfe) => (
            <button
              key={mfe.id}
              onClick={() => onTrocaMFE(mfe.id)}
              title={isCollapsed ? mfe.label : ""}
              className={`flex items-center gap-4 p-3 rounded-none text-sm font-medium transition-all group
                ${mfeAtivo === mfe.id ? 'bg-zinc-800 text-white border-l-2 border-blue-600' : 'hover:bg-zinc-800 text-zinc-500'}
                ${isCollapsed ? 'justify-center' : ''}`}
            >
              <span className={mfeAtivo === mfe.id ? 'text-blue-500' : 'group-hover:text-zinc-300'}>
                {mfe.icon}
              </span>
              {!isCollapsed && <span className="whitespace-nowrap">{mfe.label}</span>}
            </button>
          ))
        )}
      </nav>
    </aside>
  );
}

export default function App() {
  const [mfeAtivo, setMfeAtivo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleTrocaMFE = (mfeId) => {
    setMfeAtivo(mfeId);
  };

  const activeMFEConfig = null;

  return (
    <div className="flex h-screen bg-zinc-950 text-white overflow-hidden">
      <MFESidebar
        mfes={[]}
        mfeAtivo={mfeAtivo}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        onTrocaMFE={handleTrocaMFE}
        capabilityTitle={CAPABILITY_TITLE}
      />

      <main className="flex-1 relative flex flex-col min-w-0 overflow-hidden">
        <MenuSuperior
          mfeLabel="Capability em desenvolvimento"
        />

        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-zinc-800 rounded-none flex items-center justify-center mx-auto mb-4">
              <Package size={32} className="text-zinc-500" />
            </div>
            <h2 className="text-xl font-bold text-zinc-300 mb-2">Distribuição de Ofertas</h2>
            <p className="text-zinc-500 text-sm">Capability em desenvolvimento</p>
            <p className="text-zinc-600 text-xs mt-4">Adicione MFEs em: mfes/</p>
          </div>
        </div>
      </main>
    </div>
  );
}