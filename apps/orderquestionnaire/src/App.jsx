import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { ReactFlow, Background, Controls, addEdge, applyNodeChanges, applyEdgeChanges, Panel, ReactFlowProvider } from 'reactflow';
import 'reactflow/dist/style.css';
import { dataService } from 'shared-data';
import { CustomNode } from './components/CustomNode';
import { ConfigPanel } from './components/ConfigPanel';
import dagre from '@dagrejs/dagre';
import { Search, Plus, Check, Trash2, LayoutGrid, X, Save, Layers, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DESIGNER_FLOWS } from './constants/flows';

const nodeTypes = { perguntaNode: CustomNode, quizNode: CustomNode };
const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

export default function App() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [perguntas, setPerguntas] = useState([]);
  const [busca, setBusca] = useState("");
  const [termoBuscaBiblioteca, setTermoBuscaBiblioteca] = useState("");
  const [selecionadas, setSelecionadas] = useState([]);
  const [quizAtivo, setQuizAtivo] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isFallback, setIsFallback] = useState(dataService.isFallbackActive);
  const [originalQuestionIds, setOriginalQuestionIds] = useState([]);
  const [apiError, setApiError] = useState(null);
  const [apiSuccess, setApiSuccess] = useState(null);

  useEffect(() => {
    const unsubFallback = dataService.subscribeToFallback(setIsFallback);
    const unsubError = dataService.subscribeToApiError(setApiError);
    const unsubSuccess = dataService.subscribeToApiSuccess(setApiSuccess);
    return () => { unsubFallback(); unsubError(); unsubSuccess(); };
  }, []);

  useEffect(() => {
    if (apiSuccess) {
      const timer = setTimeout(() => setApiSuccess(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [apiSuccess]);

  const carregarBiblioteca = useCallback(async () => {
    try {
      const response = await dataService.getPerguntas({ flowId: DESIGNER_FLOWS.LIST_QUESTIONS });
      setPerguntas(response.data || []);
    } catch (err) { console.error("Erro na biblioteca", err); }
  }, []);

  useEffect(() => {
    carregarBiblioteca();
  }, [carregarBiblioteca]);

  const perguntasFiltradas = useMemo(() => {
    return perguntas.filter(p => 
      p.label.toLowerCase().includes(termoBuscaBiblioteca.toLowerCase()) ||
      p.id.toLowerCase().includes(termoBuscaBiblioteca.toLowerCase())
    );
  }, [termoBuscaBiblioteca, perguntas]);

  const aplicarAutoLayout = useCallback((nodesParaAjustar, edgesParaAjustar, direcao = 'TB') => {
    if (nodesParaAjustar.length === 0) return [];
    
    // Criamos um novo grafo para cada execução para evitar lixo de execuções anteriores
    const g = new dagre.graphlib.Graph();
    g.setGraph({ rankdir: direcao, marginx: 50, marginy: 50 });
    g.setDefaultEdgeLabel(() => ({}));

    nodesParaAjustar.forEach((node) => g.setNode(node.id, { width: 220, height: 80 }));
    edgesParaAjustar.forEach((edge) => g.setEdge(edge.source, edge.target));
    dagre.layout(g);

    return nodesParaAjustar.map((node) => {
      const nodeWithPosition = g.node(node.id);
      return {
        ...node,
        position: { x: nodeWithPosition.x - 110, y: nodeWithPosition.y - 40 },
      };
    });
  }, []);

  const onNodesChange = useCallback((chs) => setNodes((nds) => applyNodeChanges(chs, nds)), []);
  const onEdgesChange = useCallback((chs) => setEdges((eds) => applyEdgeChanges(chs, eds)), []);
  const onConnect = useCallback((params) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)), []);

  const abrirModalBusca = async () => {
    try {
      const response = await dataService.getQuestionarios({ flowId: DESIGNER_FLOWS.LOAD_DESIGN });
      const quizes = response.data || response;
      const filtrados = busca.trim() 
        ? quizes.filter(q => q.id.includes(busca) || q.nome.toLowerCase().includes(busca.toLowerCase())) 
        : quizes;
      setSearchResults(filtrados);
      setIsSearchModalOpen(true);
    } catch (err) { alert("Erro ao buscar questionários."); }
  };

  const carregarFluxoQuestionario = async (quizSummary) => {
    try {
      const quiz = await dataService.getQuestionarioById(
        quizSummary.id, 
        quizSummary.channelDistributionId, 
        quizSummary.journeyDistributionId,
        DESIGNER_FLOWS.LOAD_DESIGN
      );
      setQuizAtivo(quiz);
      setIsSearchModalOpen(false);
      setSelectedNode(null);

      const idsOriginais = quiz.configuredQuestions?.map(cq => cq.questionId) || [];
      setOriginalQuestionIds(idsOriginais);

      const quizNode = { 
        id: quiz.id, 
        type: 'quizNode', 
        data: quiz, 
        position: { x: 0, y: 0 } 
      };

      const qNodes = (quiz.configuredQuestions || []).map(cq => {
        const pData = perguntas.find(p => p.id === cq.questionId) || { id: cq.questionId, label: 'Carregando...' };
        
        // Garantir que a configuração de resposta tenha a estrutura esperada pelo ConfigPanel
        const safeAnswerConfig = cq.answerConfiguration || { type: 'TEXT', attributes: {} };
        if (!safeAnswerConfig.attributes) safeAnswerConfig.attributes = {};
        
        return {
          id: `node_${cq.questionId}`,
          type: 'perguntaNode',
          data: { ...pData, config: { 
            order: cq.order, 
            answerConfig: safeAnswerConfig, 
            rootCondition: cq.rootCondition 
          }},
          position: { x: 0, y: 0 }
        };
      });

      // Gerar arestas baseadas em rootCondition (dependências lógicas)
      const extractDependencies = (condition) => {
        if (!condition) return [];
        if (condition.type === 'COMPOSITE') {
          return (condition.children || []).flatMap(extractDependencies);
        }
        return condition.attributes?.questionRootCode ? [condition.attributes.questionRootCode] : [];
      };

      const qEdges = (quiz.configuredQuestions || []).flatMap(cq => {
        const targetId = `node_${cq.questionId}`;
        const dependentOnIds = extractDependencies(cq.rootCondition);
        
        if (dependentOnIds.length > 0) {
          return dependentOnIds.map(rootId => ({
            id: `e-${rootId}-${cq.questionId}`,
            source: `node_${rootId}`,
            target: targetId,
            animated: true,
            label: 'regr'
          }));
        }
        
        // Se não tem condição, conecta ao questionário (raiz)
        return [{ id: `e-${quiz.id}-${cq.questionId}`, source: quiz.id, target: targetId, animated: true }];
      });

      const allNodes = [quizNode, ...qNodes];
      setNodes(aplicarAutoLayout(allNodes, qEdges));
      setEdges(qEdges);

    } catch (err) { console.error(err); alert("Erro ao carregar questionário."); }
  };

  const syncEdgesWithConditions = useCallback(() => {
    setEdges(() => {
      const newEdges = [];
      const currentQuestionNodes = nodes.filter(n => n.type === 'perguntaNode');

      const extractDeps = (condition) => {
        if (!condition) return [];
        if (condition.type === 'COMPOSITE') {
          return (condition.children || []).flatMap(extractDeps);
        }
        return condition.attributes?.questionRootCode ? [condition.attributes.questionRootCode] : [];
      };
      
      currentQuestionNodes.forEach(node => {
        const config = node.data.config;
        const targetId = node.id;
        const dependentOnIds = extractDeps(config?.rootCondition);

        if (dependentOnIds.length > 0) {
          dependentOnIds.forEach(rootId => {
            newEdges.push({
              id: `e-${rootId}-${node.data.id}`,
              source: `node_${rootId}`,
              target: targetId,
              animated: true,
              label: 'regr'
            });
          });
        } else if (quizAtivo) {
          newEdges.push({
            id: `e-${quizAtivo.id}-${node.data.id}`,
            source: quizAtivo.id,
            target: targetId,
            animated: true
          });
        }
      });
      return newEdges;
    });
  }, [nodes, quizAtivo]);

  const salvarTudo = async () => {
    if (!quizAtivo) return;
    
    try {
      const currentQuestionNodes = nodes.filter(n => n.type === 'perguntaNode');
      const currentIds = currentQuestionNodes.map(n => n.data.id);
      
      const questionsToUpsert = currentQuestionNodes.map(n => ({
        questionId: n.data.id,
        param: {
          order: n.data.config?.order || 0,
          answerConfiguration: n.data.config?.answerConfig || { type: 'TEXT', attributes: {} },
          rootCondition: n.data.config?.rootCondition || null
        }
      }));

      const questionIdsToRemove = originalQuestionIds.filter(id => !currentIds.includes(id));

      await dataService.updateQuiz(quizAtivo.id, {
        nome: quizAtivo.nome,
        status: quizAtivo.status,
        questionsToUpsert,
        questionIdsToRemove
      }, quizAtivo.channelDistributionId, quizAtivo.journeyDistributionId, DESIGNER_FLOWS.SYNC_DESIGN);

      carregarFluxoQuestionario(quizAtivo);
    } catch (err) { /* Erro já tratado pelo banner via dataService */ }
  };

  const updateNodeData = (id, newData) => {
    setNodes(nds => nds.map(n => n.id === id ? { ...n, data: newData } : n));
    // Se o nó alterado for o questionário principal, atualiza o estado quizAtivo também
    if (quizAtivo && id === quizAtivo.id) {
      setQuizAtivo(newData);
    }
  };

  const deleteNode = (id) => {
    setNodes(nds => nds.filter(n => n.id !== id));
    setEdges(eds => eds.filter(e => e.source !== id && e.target !== id));
    setSelectedNode(null);
  };

  const toggleSelecao = (id) => {
    setSelecionadas(prev => prev.includes(id) ? prev.filter(sid => sid !== id) : [...prev, id]);
  };

  const adicionarSelecionadas = () => {
    const novasPerguntas = perguntas.filter(p => selecionadas.includes(p.id));
    const novosNodes = novasPerguntas.map(p => ({
      id: `node_${p.id}`,
      type: 'perguntaNode',
      data: { ...p, config: { order: nodes.length, answerConfig: { type: 'TEXT', attributes: {} } } },
      position: { x: Math.random() * 200, y: Math.random() * 200 }
    }));

    const idsExistentes = new Set(nodes.map(n => n.id));
    const filtrados = novosNodes.filter(n => !idsExistentes.has(n.id));

    setNodes(nds => nds.concat(filtrados));
    setSelecionadas([]);
  };

  const handleAutoLayout = () => {
    const extractDeps = (condition) => {
      if (!condition) return [];
      if (condition.type === 'COMPOSITE') {
        return (condition.children || []).flatMap(extractDeps);
      }
      return condition.attributes?.questionRootCode ? [condition.attributes.questionRootCode] : [];
    };

    const newEdges = [];
    const currentQuestionNodes = nodes.filter(n => n.type === 'perguntaNode');
    
    currentQuestionNodes.forEach(node => {
      const config = node.data.config;
      const targetId = node.id;
      const dependentOnIds = extractDeps(config?.rootCondition);

      if (dependentOnIds.length > 0) {
        dependentOnIds.forEach(rootId => {
          newEdges.push({
            id: `e-${rootId}-${node.data.id}`,
            source: `node_${rootId}`,
            target: targetId,
            animated: true,
            label: 'regr'
          });
        });
      } else if (quizAtivo) {
        newEdges.push({
          id: `e-${quizAtivo.id}-${node.data.id}`,
          source: quizAtivo.id,
          target: targetId,
          animated: true
        });
      }
    });

    setEdges(newEdges);
    setNodes(nds => aplicarAutoLayout(nds, newEdges));
  };

  return (
    <ReactFlowProvider>
    <div className="flex flex-col h-screen bg-zinc-950 text-white font-sans selection:bg-blue-500/30">
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
        
        <div className="relative flex items-center group">
           <Search size={14} className="absolute left-3 text-zinc-600 group-focus-within:text-blue-500 transition-all" />
           <input 
            className="bg-zinc-950 border border-zinc-800 p-2.5 pl-10 rounded-none text-xs w-72 focus:border-blue-600 outline-none transition-all placeholder:text-zinc-700" 
            placeholder="ID ou Nome do Questionário..." 
            value={busca} onChange={e => setBusca(e.target.value)} 
            onKeyDown={e => e.key === 'Enter' && abrirModalBusca()}
          />
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
          <button onClick={handleAutoLayout} className="bg-zinc-800 hover:bg-zinc-700 px-5 py-2.5 rounded-none text-[10px] font-black border border-zinc-700 uppercase transition-all active:scale-95">Auto Layout</button>
          <button onClick={salvarTudo} disabled={!quizAtivo} className="bg-blue-600 hover:bg-blue-500 disabled:opacity-30 px-6 py-2.5 rounded-none text-[10px] font-black uppercase flex items-center gap-2 transition-all active:scale-95">
            <Save size={14} /> Sincronizar API
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
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
                placeholder="Filtrar por label ou ID..."
                value={termoBuscaBiblioteca}
                onChange={e => setTermoBuscaBiblioteca(e.target.value)}
              />
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
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar bg-zinc-900/50">
            {perguntasFiltradas.map(p => (
              <div 
                key={p.id}
                onClick={() => toggleSelecao(p.id)}
                className={`p-4 rounded-none border transition-all cursor-pointer group flex items-center gap-4
                  ${selecionadas.includes(p.id) ? 'bg-blue-600/10 border-blue-600' : 'bg-zinc-950 border-zinc-800 hover:border-zinc-600'}`}
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
            ))}
          </div>
        </aside>

        <main className="flex-1 relative bg-zinc-950 w-full h-full">
          <ReactFlow 
            nodes={nodes} 
            edges={edges} 
            onNodesChange={onNodesChange} 
            onEdgesChange={onEdgesChange} 
            onConnect={onConnect} 
            onNodeClick={(_, node) => setSelectedNode(node)}
            onPaneClick={() => setSelectedNode(null)}
            nodeTypes={nodeTypes} 
            deleteKeyCode={["Backspace", "Delete"]} 
            fitView
          >
            <Background color="#27272a" gap={24} variant="lines" size={1} />
            <Controls className="bg-zinc-900 fill-white border-zinc-800 rounded-none m-4" />
            
            <AnimatePresence>
              {selectedNode && (
                <ConfigPanel 
                  node={selectedNode} 
                  allNodes={nodes}
                  onUpdate={(id, newData) => {
                    updateNodeData(id, newData);
                    setSelectedNode(prev => ({ ...prev, data: newData }));
                  }} 
                  onDelete={deleteNode} 
                  onClose={() => setSelectedNode(null)} 
                />
              )}
            </AnimatePresence>

            <Panel position="bottom-left" className="m-4">
              <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 p-3 flex gap-4 text-[9px] font-bold uppercase tracking-widest text-zinc-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600" /> Questionário
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-zinc-700" /> Pergunta
                </div>
              </div>
            </Panel>
          </ReactFlow>

          {/* Search Modal */}
          <AnimatePresence>
            {isSearchModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-zinc-950 border border-zinc-800 rounded-none w-full max-w-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col max-h-[85vh]"
                >
                  <div className="flex justify-between items-center p-8 border-b border-zinc-900 bg-zinc-900/50">
                    <div>
                      <h2 className="text-xl font-black text-white uppercase tracking-tighter">Selecionar Contexto</h2>
                      <p className="text-[10px] text-zinc-500 font-bold tracking-[0.2em] uppercase mt-2">Escolha um questionário para editar</p>
                    </div>
                    <button onClick={() => setIsSearchModalOpen(false)} className="text-zinc-600 hover:text-white p-2 transition-all">
                      <X size={24} />
                    </button>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto p-6 space-y-3 custom-scrollbar">
                    {searchResults.map(q => (
                      <div 
                        key={q.id} 
                        onClick={() => carregarFluxoQuestionario(q)}
                        className="p-5 bg-zinc-900/30 border border-zinc-800 rounded-none cursor-pointer hover:bg-blue-600/5 hover:border-blue-600 transition-all flex justify-between items-center group"
                      >
                        <div>
                          <p className="font-black text-sm text-zinc-300 group-hover:text-white transition-all uppercase">{q.nome}</p>
                          <p className="text-[10px] font-mono text-zinc-600 mt-2 tracking-widest">{q.id}</p>
                        </div>
                        <ChevronRight size={18} className="text-zinc-800 group-hover:text-blue-500 transition-all" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </main>
      </div>

      <AnimatePresence>
        {apiSuccess && (
          <motion.div key="success-toast" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }} className="fixed top-24 right-6 bg-emerald-600 text-white px-6 py-4 shadow-2xl z-[100] border-l-4 border-emerald-400 flex items-center gap-4 max-w-md">
            <div className="bg-emerald-500 p-2"><Check size={16} /></div>
            <div className="flex-1">
              <p className="text-[10px] font-black uppercase tracking-widest opacity-70">Operação Concluída</p>
              <p className="text-xs font-bold mt-0.5">{apiSuccess.message}</p>
            </div>
            <button onClick={() => setApiSuccess(null)} className="p-1 hover:bg-white/10 transition-all"><X size={14} /></button>
          </motion.div>
        )}

        {apiError && (
          <motion.div key="error-toast" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }} className="fixed top-24 right-6 bg-red-600 text-white px-6 py-4 shadow-2xl z-[100] border-l-4 border-red-400 flex items-center gap-4 max-w-md">
            <div className="bg-red-500 p-2"><X size={16} /></div>
            <div className="flex-1">
              <p className="text-[10px] font-black uppercase tracking-widest opacity-70">
                {apiError.status >= 500 ? 'Erro de Servidor' : 'Falha de Validação'} ({apiError.status})
              </p>
              <p className="text-xs font-bold mt-0.5">{apiError.message}</p>
              {apiError.detail && (
                <p className="text-[10px] mt-2 p-2 bg-black/20 font-medium leading-relaxed border-l border-white/20">
                  {apiError.detail}
                </p>
              )}
            </div>
            <button onClick={() => setApiError(null)} className="p-1 hover:bg-white/10 transition-all"><X size={14} /></button>
          </motion.div>
        )}

        {isFallback && (
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className="fixed bottom-6 right-6 bg-amber-600/90 backdrop-blur-lg text-white px-6 py-4 font-bold shadow-2xl flex items-center gap-4 z-[100] border border-amber-400/50">
            <div className="w-10 h-10 bg-amber-400/20 flex items-center justify-center rounded-none">
              <Zap size={20} className="text-amber-300" />
            </div>
            <div>
              <p className="uppercase tracking-[0.2em] text-[10px] font-black">Offline Fallback</p>
              <p className="font-medium opacity-80 text-[10px] mt-1">Conexão com a API Java perdida. Usando dados locais.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </ReactFlowProvider>
  );
}

const ChevronRight = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m9 18 6-6-6-6"/>
  </svg>
);
