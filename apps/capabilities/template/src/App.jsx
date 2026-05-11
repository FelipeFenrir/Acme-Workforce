import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  FileText,
  Share2,
  LogOut
} from 'lucide-react';
import { MenuLateral } from './components/menu-lateral/MenuLateral';
import { MenuSuperior } from './components/menu-superior/MenuSuperior';

const MFES = [
  {
    id: 'mfe-exemplo-1',
    url: import.meta.env.VITE_URL_CAPABILITY_MFE1 || "http://localhost:9201",
    label: "MFE Exemplo 1",
    icon: <HelpCircle size={20} />
  },
  {
    id: 'mfe-exemplo-2',
    url: import.meta.env.VITE_URL_CAPABILITY_MFE2 || "http://localhost:9202",
    label: "MFE Exemplo 2",
    icon: <FileText size={20} />
  }
];

export const CAPABILITY_ID = 'minha-capability';
export const CAPABILITY_TITLE = 'Minha Capability';

export default function App() {
  const [mfeAtivo, setMfeAtivo] = useState(MFES[0].url);
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleTrocaMFE = (url) => {
    if (url === mfeAtivo) return;
    setIsLoading(true);
    setMfeAtivo(url);
  };

  const activeMFE = MFES.find(m => m.url === mfeAtivo);

  return (
    <div className="flex h-screen bg-zinc-950 text-white overflow-hidden">
      <MenuLateral
        mfes={MFES}
        mfeAtivo={mfeAtivo}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        onTrocaMFE={handleTrocaMFE}
        capabilityTitle={CAPABILITY_TITLE}
      />

      <main className="flex-1 relative flex flex-col min-w-0">
        <MenuSuperior
          mfeLabel={activeMFE?.label || ''}
        />

        <div className="flex-1 relative overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 z-10 flex flex-col p-8 gap-6 bg-zinc-950">
              <div className="h-8 w-1/4 bg-zinc-900 rounded-none animate-pulse" />
              <div className="flex-1 w-full bg-zinc-900/40 rounded-none border border-zinc-800 animate-pulse" />
            </div>
          )}

          <iframe
            src={mfeAtivo}
            onLoad={() => setIsLoading(false)}
            className={`w-full h-full border-none transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            title="mfe-frame"
          />
        </div>
      </main>
    </div>
  );
}
