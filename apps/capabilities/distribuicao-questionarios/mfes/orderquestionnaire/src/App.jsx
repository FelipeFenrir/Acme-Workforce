import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { ReactFlow, Background, Controls, addEdge, applyNodeChanges, applyEdgeChanges, Panel, ReactFlowProvider } from 'reactflow';
import 'reactflow/dist/style.css';
import { dataService } from 'shared-data';
import { CustomNode } from './components/CustomNode';
import { ConfigPanel } from './components/ConfigPanel';
import { QuestionnaireLookup } from './components/QuestionnaireLookup';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { FallbackDialog } from './components/modals/FallbackDialog';
import { ErrorToast } from './components/modals/ErrorToast';
import { FallbackBanner } from './components/modals/FallbackBanner';
import dagre from '@dagrejs/dagre';
import { Trash2 } from 'lucide-react';
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
  const [isFallback, setIsFallback] = useState(dataService.isFallbackActive);
  const [originalQuestionIds, setOriginalQuestionIds] = useState([]);
  const [apiError, setApiError] = useState(null);
  const [apiSuccess, setApiSuccess] = useState(null);
  const [fallbackDialog, setFallbackDialog] = useState(null);

  // Pagination states for Questions (Library)
  const [nextCursorQuestions, setNextCursorQuestions] = useState(null);
  const [hasNextQuestions, setHasNextQuestions] = useState(false);
  const [isFetchingMoreQuestions, setIsFetchingMoreQuestions] = useState(false);
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(false);
  const [filtersQuestions, setFiltersQuestions] = useState({ buscaValor: '', buscaTipo: 'NOME' });
  const observerQuestions = useRef();

  useEffect(() => {
    const unsubFallback = dataService.subscribeToFallback(setIsFallback);
    const unsubError = dataService.subscribeToApiError(setApiError);
    const unsubSuccess = dataService.subscribeToApiSuccess(setApiSuccess);

    // Configura o handler de dialog para fallback
    dataService.setDialogHandler((options) => {
      return new Promise((resolve) => {
        setFallbackDialog({ 
          ...options, 
          onConfirm: () => { setFallbackDialog(null); resolve(true); }, 
          onCancel: () => { setFallbackDialog(null); resolve(false); } 
        });
      });
    });

    return () => { unsubFallback(); unsubError(); unsubSuccess(); };
  }, []);

  useEffect(() => {
    if (apiSuccess) {
      const timer = setTimeout(() => setApiSuccess(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [apiSuccess]);

  const carregarBiblioteca = useCallback(async (cursor = null, append = false) => {
    if (!append) setIsLoadingQuestions(true);
    else setIsFetchingMoreQuestions(true);

    try {
      const response = await dataService.getPerguntas({ 
        cursor, 
        size: 15, 
        filters: filtersQuestions,
        flowId: DESIGNER_FLOWS.LIST_QUESTIONS 
      });

      let newData = response.data || [];
      let meta = response.meta || { hasNext: false, nextCursor: null };

      setPerguntas(prev => {
        if (!append) return newData;
        const ids = new Set(prev.map(i => i.id));
        const filteredNew = newData.filter(i => !ids.has(i.id));
        return [...prev, ...filteredNew];
      });

      setHasNextQuestions(meta.hasNext);
      setNextCursorQuestions(meta.nextCursor);
    } catch (err) { 
      console.error("Erro na biblioteca", err); 
    } finally {
      setIsLoadingQuestions(false);
      setIsFetchingMoreQuestions(false);
    }
  }, [filtersQuestions]);

  useEffect(() => {
    carregarBiblioteca();
  }, [carregarBiblioteca]);

  const lastQuestionElementRef = useCallback(node => {
    if (isLoadingQuestions || isFetchingMoreQuestions) return;
    if (observerQuestions.current) observerQuestions.current.disconnect();
    observerQuestions.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasNextQuestions && nextCursorQuestions) {
        carregarBiblioteca(nextCursorQuestions, true);
      }
    });
    if (node) observerQuestions.current.observe(node);
  }, [isLoadingQuestions, isFetchingMoreQuestions, hasNextQuestions, nextCursorQuestions, carregarBiblioteca]);

  const perguntasFiltradas = perguntas;

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
        // Usa dados locais da biblioteca (já contém status atualizado)
        const pData = perguntas.find(p => p.id === cq.questionId) || { id: cq.questionId, label: 'Carregando...' };
        
        // Garantir que a configuração de resposta tenha a estrutura esperada pelo ConfigPanel
        const safeAnswerConfig = cq.answerConfiguration || { type: 'TEXT', attributes: {} };
        if (!safeAnswerConfig.attributes) safeAnswerConfig.attributes = {};
        
        return {
          id: `node_${cq.questionId}`,
          type: 'perguntaNode',
          data: { 
            ...pData,
            config: { 
              order: cq.order, 
              answerConfig: safeAnswerConfig, 
              rootCondition: cq.rootCondition 
            }
          },
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
      <Header 
          busca={busca}
          setBusca={setBusca}
          quizAtivo={quizAtivo}
          onOpenSearch={() => setIsSearchModalOpen(true)}
          onAutoLayout={handleAutoLayout}
          onSave={salvarTudo}
        />

      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar 
          perguntas={perguntas}
          selecionadas={selecionadas}
          toggleSelecao={toggleSelecao}
          adicionarSelecionadas={adicionarSelecionadas}
          filtersQuestions={filtersQuestions}
          setFiltersQuestions={setFiltersQuestions}
          termoBuscaBiblioteca={termoBuscaBiblioteca}
          setTermoBuscaBiblioteca={setTermoBuscaBiblioteca}
          isLoadingQuestions={isLoadingQuestions}
          isFetchingMoreQuestions={isFetchingMoreQuestions}
          hasNextQuestions={hasNextQuestions}
          nextCursorQuestions={nextCursorQuestions}
          onLoadMore={carregarBiblioteca}
        />

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
                    if (selectedNode.type === 'perguntaNode' && newData.status) {
                      setPerguntas(prev => prev.map(p => 
                        p.id === selectedNode.data.id ? { ...p, status: newData.status } : p
                      ));
                    }
                  }} 
                  onDelete={deleteNode} 
                  onClose={() => setSelectedNode(null)} 
                />
              )}
            </AnimatePresence>

            <Panel position="bottom-left" className="m-4">
              <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 p-3 flex gap-4 text-[9px] font-bold uppercase tracking-widest text-zinc-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span>{nodes.length} nós</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-zinc-500 rounded-full" />
                  <span>{edges.length} conexões</span>
                </div>
                {quizAtivo && (
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${quizAtivo.status === 'ACTIVE' ? 'bg-emerald-500' : 'bg-zinc-500'}`} />
                    <span>{quizAtivo.status}</span>
                  </div>
                )}
              </div>
            </Panel>
          </ReactFlow>

          {isSearchModalOpen && (
            <QuestionnaireLookup 
              isOpen={isSearchModalOpen}
              onClose={() => setIsSearchModalOpen(false)}
              onSelect={carregarFluxoQuestionario}
            />
          )}
        </main>
      </div>

      <FallbackDialog 
        key="fallback-dialog"
        fallbackDialog={fallbackDialog} 
        onClose={() => setFallbackDialog(null)}
        onConfirm={fallbackDialog?.onConfirm}
      />

      <ErrorToast apiError={apiError} onClose={() => setApiError(null)} />
      <FallbackBanner isFallback={isFallback} />
    </div>
    </ReactFlowProvider>
  );
}

const ChevronRight = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m9 18 6-6-6-6"/>
  </svg>
);
