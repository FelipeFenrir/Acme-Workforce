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
  CookingPot,
  Beef,
  Calculator,
  Handshake
} from 'lucide-react';

// 1. Definição das Capacidades e seus respectivos Micro Frontends
const CAPACIDADES = [
  {
    id: 'catalogoParticipantes',
    titulo: 'Catalogo de Participantes',
    descricao: 'Gerencia Participantes da Plataforma: Canais de Distribuição, Manufaturas e Configurações de Parceiros.',
    icon: <Drama size={32} />,
    color: 'border-zinc-700/20 hover:border-zinc-700',
    accent: 'bg-zinc-700',
    mfes: [] // Futuros micro-serviços entrariam aqui
  },
  {
    id: 'distribuicaoQuestionario',
    titulo: 'Distribuição de Questionários',
    descricao: 'Gerencie o ciclo de vida de questionarios na sua jornada de venda: criação de perguntas, montagem de questionários e designer de fluxo da Distribuição do Questionario na Jornada de Venda.',
    icon: <Share2 size={32} />,
    color: 'border-zinc-700/20 hover:border-zinc-700',
    accent: 'bg-zinc-700',
    mfes: [
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
        label: "Designer de Fluxo",
        icon: <Share2 size={20} />
      }
    ]
  },
  {
    id: 'catalogoProdutosOfertas',
    titulo: 'Catalogo de Produtos e Ofertas',
    descricao: 'Cadastre e Gerencia seus Produtos, Serviços e Ofertas: Crie e configure produtos e serviços, os atributos que o compoem e crie Ofertas que são composições dos produtos/serviços.',
    icon: <Beef size={32} />,
    color: 'border-zinc-700/20 hover:border-zinc-700',
    accent: 'bg-zinc-700',
    mfes: [] // Futuros micro-serviços entrariam aqui
  },
  {
    id: 'contextualizacaoOfertas',
    titulo: 'Contextualização de Ofertas',
    descricao: 'Organize suas Prateleiras e Jornadas de Venda: Adicione/Remova Ofertas em Jornadas de Venda ou Gerencia a relação entre Jornadas e Canais de Venda.',
    icon: <ShelvingUnit size={32} />,
    color: 'border-zinc-700/20 hover:border-zinc-700',
    accent: 'bg-zinc-700',
    mfes: [] // Futuros micro-serviços entrariam aqui
  },
  {
    id: 'distribuicaoOfertas',
    titulo: 'Distribuição de Ofertas',
    descricao: 'Gerencia regras de Aderencia de Ofertas em suas Jornadas de Venda: Crie regras de Aderencia para Ofertas e seus atributos, configure tipos diversos de Descontos nas suas jornadas de vendas.',
    icon: <CookingPot size={32} />,
    color: 'border-zinc-700/20 hover:border-zinc-700',
    accent: 'bg-zinc-700',
    mfes: [] // Futuros micro-serviços entrariam aqui
  },
  {
    id: 'multicotacao',
    titulo: 'Fluxos de Multicotação',
    descricao: 'Configure como um Pedido é calculado: Defina as formulas de calculo e matrizes de taxas e preços.',
    icon: <Calculator size={32} />,
    color: 'border-zinc-700/20 hover:border-zinc-700',
    accent: 'bg-zinc-700',
    mfes: [] // Futuros micro-serviços entrariam aqui
  },
  {
    id: 'propostas',
    titulo: 'Fluxos de Propostas',
    descricao: 'Configure fluxos de propostas: Defina a pipeline de propostas, os eventos de gatilho, as ações que serão tomadas, comunicações e validação de emissões de propostas.',
    icon: <Handshake size={32} />,
    color: 'border-zinc-700/20 hover:border-zinc-700',
    accent: 'bg-zinc-700',
    mfes: [] // Futuros micro-serviços entrariam aqui
  },
  {
    id: 'analytics',
    titulo: 'Analytics & BI',
    descricao: 'Visualize métricas de performance, taxas de resposta e dashboards analíticos em tempo real.',
    icon: <LayoutDashboard size={32} />,
    color: 'border-zinc-700/20 hover:border-zinc-700',
    accent: 'bg-zinc-700',
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

  // Componente do Card Hexagonal
  const renderCard = (cap) => (
    <div
      key={cap.id}
      onClick={() => selecionarCapacidade(cap)}
      className="relative w-[280px] h-[320px] cursor-pointer transition-all duration-300 group hover:-translate-y-2"
    >
      {/* Outer Hexagon (Border) */}
      <div
        className="absolute inset-0 bg-zinc-800 transition-colors duration-300"
        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
      >
        {/* Hover state for border */}
        <div className={`w-full h-full ${cap.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      </div>

      {/* Inner Hexagon (Background) */}
      <div
        className="absolute inset-[1px] bg-zinc-950 group-hover:bg-zinc-900 flex flex-col items-center text-center p-6 transition-all duration-300"
        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
      >
        <div className="w-14 h-14 rounded-none bg-zinc-900 flex items-center justify-center mt-4 mb-4 group-hover:scale-110 transition-transform">
          <span className="text-zinc-300">{cap.icon}</span>
        </div>
        <h3 className="text-lg font-bold mb-2 px-2 leading-tight">{cap.titulo}</h3>
        <p className="text-zinc-500 text-xs leading-relaxed mb-4 overflow-hidden line-clamp-4">{cap.descricao}</p>

        <div className="mt-auto mb-4 flex items-center justify-center">
          <div className={`p-2 rounded-none ${cap.accent} text-white opacity-0 group-hover:opacity-100 transition-opacity`}>
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );

  // Função para renderizar o layout de Favo de Mel dinâmico
  const renderHoneycomb = (items, cols) => {
    const rows = [];
    let i = 0;
    let isOdd = false;
    while (i < items.length) {
      const rowSize = isOdd ? cols - 1 : cols;
      rows.push(items.slice(i, i + rowSize));
      i += rowSize;
      isOdd = !isOdd;
    }
    return (
      <div className="flex flex-col items-center">
        {rows.map((rowItems, idx) => (
          <div key={idx} className={`flex gap-4 ${idx > 0 ? '-mt-[64px]' : ''}`}>
            {rowItems.map(renderCard)}
          </div>
        ))}
      </div>
    );
  };

  // --- VIEW 1: HOME (HUB DE CARDS) ---
  if (!capacidadeAtiva) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white p-12 font-sans overflow-x-hidden">
        <header className="max-w-7xl mx-auto mb-16 flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-zinc-800 rounded-none flex items-center justify-center font-black">A</div>
            <h1 className="text-2xl font-black tracking-tighter uppercase text-zinc-100">Acme Workforce</h1>
          </div>
          <h2 className="text-4xl font-bold text-zinc-100">O que vamos gerenciar hoje?</h2>
          <p className="text-zinc-500 mt-3 font-medium">Escolha uma capacidade para acessar as ferramentas integradas.</p>
        </header>

        {/* Mobile View */}
        <div className="md:hidden flex flex-wrap justify-center gap-6 pb-8">
          {CAPACIDADES.map(renderCard)}
        </div>

        {/* Tablet View */}
        <div className="hidden md:block xl:hidden pb-8">
          {renderHoneycomb(CAPACIDADES, 2)}
        </div>

        {/* Desktop View */}
        <div className="hidden xl:block pb-16">
          {renderHoneycomb(CAPACIDADES, 3)}
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
          className="absolute -right-3 top-10 bg-zinc-700 rounded-none p-1 z-50 hover:bg-zinc-600"
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
          {!isCollapsed && <h2 className="text-sm font-bold text-zinc-300 leading-tight">{capacidadeAtiva.titulo}</h2>}
        </div>

        {/* MFE Navigation */}
        <nav className="flex-1 p-3 flex flex-col gap-2 mt-4">
          {capacidadeAtiva.mfes.map((mfe) => (
            <button
              key={mfe.id}
              onClick={() => handleTrocaMFE(mfe.url)}
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

      {/* MFE CONTAINER */}
      <main className="flex-1 relative flex flex-col min-w-0">
        <header className="h-16 border-b border-zinc-800 bg-zinc-900/50 flex items-center px-8 justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-none bg-blue-600" />
            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">
              {capacidadeAtiva.mfes.find(m => m.url === mfeAtivo)?.label}
            </span>
          </div>
        </header>

        <div className="flex-1 relative">
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
