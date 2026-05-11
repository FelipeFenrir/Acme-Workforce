import React, { useState, Suspense, lazy } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  FileText,
  Share2,
  LogOut,
  CheckCircle
} from 'lucide-react';
import { MenuSuperior } from './components/menu-superior/MenuSuperior';
import './styles.css';

const MFES_CONFIG = [
  {
    id: 'questoes',
    url: import.meta.env.VITE_URL_QUESTIONS || "http://localhost:9101",
    label: "Questões",
    icon: <HelpCircle size={20} />
  },
  {
    id: 'questionarios',
    url: import.meta.env.VITE_URL_QUESTIONNAIRE || "http://localhost:9102",
    label: "Questionários",
    icon: <FileText size={20} />
  },
  {
    id: 'designer',
    url: import.meta.env.VITE_URL_ORDER || "http://localhost:9103",
    label: "Designer de Questionário",
    icon: <Share2 size={20} />
  },
  {
    id: 'validar',
    url: import.meta.env.VITE_URL_VALIDATE_QUESTIONNAIRE || "http://localhost:9104",
    label: "Teste seu Questionário",
    icon: <CheckCircle size={20} />
  }
];

export const CAPABILITY_ID = 'distribuicao-questionarios';
export const CAPABILITY_TITLE = 'Distribuição de Questionários';

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
        {mfes.map((mfe) => (
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
        ))}
      </nav>
    </aside>
  );
}

export default function App() {
  const [mfeAtivo, setMfeAtivo] = useState(MFES_CONFIG[0].url);
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const activeMFEConfig = MFES_CONFIG.find(m => m.url === mfeAtivo);

  const handleTrocaMFE = (mfeId) => {
    const newMFE = MFES_CONFIG.find(m => m.id === mfeId);
    if (newMFE && newMFE.url !== mfeAtivo) {
      setIsLoading(true);
      setMfeAtivo(newMFE.url);
    }
  };

  return (
    <div className="flex h-screen bg-zinc-950 text-white overflow-hidden">
      <MFESidebar
        mfes={MFES_CONFIG}
        mfeAtivo={mfeAtivo}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        onTrocaMFE={handleTrocaMFE}
        capabilityTitle={CAPABILITY_TITLE}
      />

      <main className="flex-1 relative flex flex-col min-w-0 overflow-hidden">
        <MenuSuperior
          mfeLabel={activeMFEConfig?.label || ''}
        />

        <div className="flex-1 relative overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-zinc-950">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-zinc-700 border-t-blue-500 rounded-full animate-spin" />
                <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Carregando...</span>
              </div>
            </div>
          )}

          <iframe
            src={mfeAtivo}
            onLoad={() => setIsLoading(false)}
            className={`w-full h-full border-none ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            title="mfe-frame"
          />
        </div>
      </main>
    </div>
  );
}
