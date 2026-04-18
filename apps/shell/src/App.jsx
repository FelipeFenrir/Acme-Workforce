import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  HelpCircle, 
  FileText, 
  Share2, 
  LayoutDashboard, 
  Grid,
  ArrowRight,
  Drama,
  ShelvingUnit,
  CookingPot
} from 'lucide-react';

// 1. Definição das Capacidades e seus respectivos Micro Frontends
const CAPACIDADES = [
  {
    id: 'distribuicaoQuestionario',
    titulo: 'Distribuição de Questionários',
    descricao: 'Gerencie o ciclo de vida de questionarios na sua jornada de venda: criação de perguntas, montagem de questionários e designer de fluxo da Distribuição do Questionario na Jornada de Venda.',
    icon: <Share2 size={32} />,
    color: 'border-emerald-500/20 hover:border-emerald-500',
    accent: 'bg-emerald-500',
    mfes: [
      { 
        id: 'questoes', 
        url: import.meta.env.VITE_URL_QUESTIONS || "http://localhost:3001", 
        label: "Questões", 
        icon: <HelpCircle size={20} /> 
      },
      { 
        id: 'questionarios', 
        url: import.meta.env.VITE_URL_QUESTIONNAIRE || "http://localhost:3002", 
        label: "Questionários", 
        icon: <FileText size={20} /> 
      },
      { 
        id: 'designer', 
        url: import.meta.env.VITE_URL_ORDER || "http://localhost:3003", 
        label: "Designer de Fluxo", 
        icon: <Share2 size={20} /> 
      }
    ]
  },
  {
    id: 'catalogoParticipantes',
    titulo: 'Catalogo de Participantes',
    descricao: 'Gerencia Participantes da Plataforma: Canais de Distribuição, Manufaturas e Configurações de Parceiros.',
    icon: <Drama size={32} />,
    color: 'border-blue-500/20 hover:border-blue-500',
    accent: 'bg-blue-500',
    mfes: [] // Futuros micro-serviços entrariam aqui
  },
  {
    id: 'contextualizacaoOfertas',
    titulo: 'Contextualização de Ofertas',
    descricao: 'Organize suas Prateleiras e Jornadas de Venda: Adicione/Remova Ofertas em Jornadas de Venda ou Gerencia a relação entre Jornadas e Canais de Venda.',
    icon: <ShelvingUnit size={32} />,
    color: 'border-blue-500/20 hover:border-blue-500',
    accent: 'bg-blue-500',
    mfes: [] // Futuros micro-serviços entrariam aqui
  },
  {
    id: 'distribuicaoOfertas',
    titulo: 'Distribuição de Ofertas',
    descricao: 'Gerencia regras de Aderencia de Ofertas em suas Jornadas de Venda: Crie regras de Aderencia para Ofertas.',
    icon: <CookingPot size={32} />,
    color: 'border-blue-500/20 hover:border-blue-500',
    accent: 'bg-blue-500',
    mfes: [] // Futuros micro-serviços entrariam aqui
  },
  {
    id: 'analytics',
    titulo: 'Analytics & BI',
    descricao: 'Visualize métricas de performance, taxas de resposta e dashboards analíticos em tempo real.',
    icon: <LayoutDashboard size={32} />,
    color: 'border-blue-500/20 hover:border-blue-500',
    accent: 'bg-blue-500',
    mfes: [] // Futuros micro-serviços entrariam aqui
  }
];

export default function App() {
  const [capacidadeAtiva, setCapacidadeAtiva] = useState(null);
  const [mfeAtivo, setMfeAtivo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Função para entrar em uma capacidade
  const selecionarCapacidade = (cap) => {
    if (cap.mfes.length === 0) return alert("Esta capacidade ainda não possui serviços ativos.");
    setCapacidadeAtiva(cap);
    setMfeAtivo(cap.mfes[0].url); // Abre o primeiro MFE por padrão
    setIsLoading(true);
  };

  // Função para trocar de MFE dentro da sidebar
  const handleTrocaMFE = (url) => {
    if (url === mfeAtivo) return;
    setIsLoading(true);
    setMfeAtivo(url);
  };

  // --- VIEW 1: HOME (HUB DE CARDS) ---
  if (!capacidadeAtiva) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white p-12 font-sans">
        <header className="max-w-6xl mx-auto mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center font-black">A</div>
            <h1 className="text-2xl font-black tracking-tighter uppercase">Acme Workforce</h1>
          </div>
          <h2 className="text-4xl font-bold">O que vamos gerenciar hoje?</h2>
          <p className="text-zinc-500 mt-2">Escolha uma capacidade para acessar as ferramentas integradas.</p>
        </header>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAPACIDADES.map((cap) => (
            <div 
              key={cap.id}
              onClick={() => selecionarCapacidade(cap)}
              className={`p-8 bg-zinc-900/50 border ${cap.color} rounded-3xl cursor-pointer transition-all duration-300 group hover:bg-zinc-900 hover:-translate-y-2`}
            >
              <div className="w-16 h-16 rounded-2xl bg-zinc-950 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="text-emerald-500">{cap.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{cap.titulo}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">{cap.descricao}</p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">Acessar Capacidade</span>
                <div className={`p-2 rounded-full ${cap.accent} text-white opacity-0 group-hover:opacity-100 transition-opacity`}>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // --- VIEW 2: INTERFACE DA CAPACIDADE (SIDEBAR + MFE) ---
  return (
    <div className="flex h-screen bg-zinc-950 text-white overflow-hidden">
      
      {/* SIDEBAR */}
      <aside className={`bg-zinc-900 border-r border-zinc-800 transition-all duration-300 relative flex flex-col ${isCollapsed ? 'w-20' : 'w-64'}`}>
        
        {/* Toggle Button */}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-10 bg-emerald-600 rounded-full p-1 z-50 hover:bg-emerald-500 shadow-lg"
        >
          {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>

        {/* Back to Hub */}
        <div className="p-6 border-b border-zinc-800 flex flex-col gap-4">
          <button 
            onClick={() => { setCapacidadeAtiva(null); setMfeAtivo(null); }}
            className="flex items-center gap-2 text-[10px] font-black text-zinc-500 hover:text-white transition-colors uppercase tracking-widest"
          >
            <Grid size={12} /> <span className={isCollapsed ? 'hidden' : 'block'}>Voltar ao Hub</span>
          </button>
          {!isCollapsed && <h2 className="text-sm font-bold text-emerald-500 leading-tight">{capacidadeAtiva.titulo}</h2>}
        </div>

        {/* MFE Navigation */}
        <nav className="flex-1 p-3 flex flex-col gap-2 mt-4">
          {capacidadeAtiva.mfes.map((mfe) => (
            <button 
              key={mfe.id}
              onClick={() => handleTrocaMFE(mfe.url)}
              title={isCollapsed ? mfe.label : ""}
              className={`flex items-center gap-4 p-3 rounded-xl text-sm font-medium transition-all group
                ${mfeAtivo === mfe.url ? 'bg-emerald-600' : 'hover:bg-zinc-800 text-zinc-500'}
                ${isCollapsed ? 'justify-center' : ''}`}
            >
              <span className={mfeAtivo === mfe.url ? 'text-white' : 'group-hover:text-emerald-500'}>
                {mfe.icon}
              </span>
              {!isCollapsed && <span className="whitespace-nowrap">{mfe.label}</span>}
            </button>
          ))}
        </nav>
      </aside>

      {/* MFE CONTAINER */}
      <main className="flex-1 relative flex flex-col min-w-0">
        <header className="h-16 border-b border-zinc-800 bg-zinc-900/50 flex items-center px-8 justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">
              {capacidadeAtiva.mfes.find(m => m.url === mfeAtivo)?.label}
            </span>
          </div>
        </header>

        <div className="flex-1 relative">
          {isLoading && (
            <div className="absolute inset-0 z-10 flex flex-col p-8 gap-6 bg-zinc-950">
              <div className="h-8 w-1/4 bg-zinc-900 rounded-md animate-pulse" />
              <div className="flex-1 w-full bg-zinc-900/40 rounded-3xl border border-zinc-800 animate-pulse" />
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
