import React, { useState, Suspense, lazy } from 'react';
import {
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

const CAPACIDADES = [
  {
    id: 'catalogoParticipantes',
    titulo: 'Catálogo de Participantes',
    descricao: 'Gerencia Participantes da Plataforma: Canais de Distribuição, Manufaturas e Configurações de Parceiros.',
    icon: <Drama size={32} />,
    color: 'border-zinc-700/20 hover:border-zinc-700',
    accent: 'bg-zinc-700',
    url: import.meta.env.VITE_URL_CAPABILITY_CATALOGO_PARTICIPANTES || "http://localhost:9097"
  },
  {
    id: 'distribuicaoQuestionario',
    titulo: 'Distribuição de Questionários',
    descricao: 'Gerencie o ciclo de vida de questionarios na sua jornada de venda: criação de perguntas, montagem de questionários e designer de fluxo da Distribuição do Questionario na Jornada de Venda.',
    icon: <Share2 size={32} />,
    color: 'border-zinc-700/20 hover:border-zinc-700',
    accent: 'bg-zinc-700',
    url: import.meta.env.VITE_URL_CAPABILITY_DISTRIBUICAO_QUESTIONARIOS || "http://localhost:9099"
  },
  {
    id: 'catalogoProdutosOfertas',
    titulo: 'Catálogo de Produtos e Ofertas',
    descricao: 'Cadastre e Gerencia seus Produtos, Serviços e Ofertas: Crie e configure produtos e serviços, os atributos que o compoem e crie Ofertas que são composições dos produtos/serviços.',
    icon: <Beef size={32} />,
    color: 'border-zinc-700/20 hover:border-zinc-700',
    accent: 'bg-zinc-700',
    url: null
  },
  {
    id: 'contextualizacaoOfertas',
    titulo: 'Contextualização de Ofertas',
    descricao: 'Organize suas Prateleiras e Journadas de Venda: Adicione/Remova Ofertas em Journadas de Venda ou Gerencia a relação entre Journadas e Canais de Venda.',
    icon: <ShelvingUnit size={32} />,
    color: 'border-zinc-700/20 hover:border-zinc-700',
    accent: 'bg-zinc-700',
    url: null
  },
  {
    id: 'distribuicaoOfertas',
    titulo: 'Distribuição de Ofertas',
    descricao: 'Gerencia regras de Aderencia de Ofertas em suas Jorna de Venda: Crie regras de Aderencia para Ofertas e seus atributos, configure tipos diversos de Descontos nas suas jornadas de vendas.',
    icon: <CookingPot size={32} />,
    color: 'border-zinc-700/20 hover:border-zinc-700',
    accent: 'bg-zinc-700',
    url: import.meta.env.VITE_URL_CAPABILITY_DISTRIBUICAO_OFERTAS || "http://localhost:9098"
  },
  {
    id: 'multicotacao',
    titulo: 'Fluxos de Multicotação',
    descricao: 'Configure como um Pedido é calculado: Defina as formulas de calculo e matrizes de taxas e preços.',
    icon: <Calculator size={32} />,
    color: 'border-zinc-700/20 hover:border-zinc-700',
    accent: 'bg-zinc-700',
    url: null
  },
  {
    id: 'propostas',
    titulo: 'Fluxos de Propostas',
    descricao: 'Configure fluxos de propostas: Defina a pipeline de propostas, os eventos de gatilho, as ações que serão tomadas, comunicações e validação de emissões de propostas.',
    icon: <Handshake size={32} />,
    color: 'border-zinc-700/20 hover:border-zinc-700',
    accent: 'bg-zinc-700',
    url: null
  },
  {
    id: 'analytics',
    titulo: 'Analytics & BI',
    descricao: 'Visualize métricas de performance, taxas de resposta e dashboards analíticos em tempo real.',
    icon: <LayoutDashboard size={32} />,
    color: 'border-zinc-700/20 hover:border-zinc-700',
    accent: 'bg-zinc-700',
    url: null
  }
];

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-screen bg-zinc-950">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-zinc-700 border-t-blue-500 rounded-full animate-spin" />
        <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Carregando capability...</span>
      </div>
    </div>
  );
}

export default function App() {
  const [capacidadeAtiva, setCapacidadeAtiva] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  React.useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'VOLTAR_HUB') {
        setCapacidadeAtiva(null);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const selecionarCapacidade = (cap) => {
    if (!cap.url) return alert("Esta capacidade ainda não possui serviços ativos.");
    setCapacidadeAtiva(cap);
  };

  const handleVoltarHub = () => {
    setCapacidadeAtiva(null);
  };

  const renderCard = (cap) => (
    <div
      key={cap.id}
      onClick={() => selecionarCapacidade(cap)}
      className="relative w-[280px] h-[320px] cursor-pointer transition-all duration-300 group hover:-translate-y-2"
    >
      <div
        className="absolute inset-0 bg-zinc-800 transition-colors duration-300"
        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
      >
        <div className={`w-full h-full ${cap.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      </div>

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

        <div className="hidden md:block xl:hidden pb-8">
          {renderHoneycomb(CAPACIDADES, 2)}
        </div>

        <div className="hidden xl:block pb-16">
          {renderHoneycomb(CAPACIDADES, 3)}
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-zinc-950 text-white overflow-hidden">
      <iframe
        src={capacidadeAtiva.url}
        onLoad={() => setIsLoading(false)}
        className={`w-full h-full border-none ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        title="capability-frame"
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-950">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-zinc-700 border-t-blue-500 rounded-full animate-spin" />
            <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Carregando...</span>
          </div>
        </div>
      )}
    </div>
  );
}
