import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { ReactFlow, Background, Controls, addEdge, applyNodeChanges, applyEdgeChanges } from 'reactflow';
import 'reactflow/dist/style.css';
import { dataService } from 'shared-data';
import { CustomNode } from './components/CustomNode';
import dagre from '@dagrejs/dagre';
import { Search, Plus, Check, Trash2, LayoutGrid, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [abaAtiva, setAbaAtiva] = useState('lista');
  const [isFallback, setIsFallback] = useState(dataService.isFallbackActive);

  useEffect(() => {
    return dataService.subscribeToFallback(setIsFallback);
  }, []);
  const [quizAtivo, setQuizAtivo] = useState(null);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const carregarBiblioteca = useCallback(async () => {
    try {
      const { data } = await dataService.getPerguntas();
      setPerguntas(data);
    } catch (err) { console.error("Erro na API", err); }
  }, []);

  useEffect(() => {
    carregarBiblioteca();
    const interval = setInterval(carregarBiblioteca, 5000); 
    return () => clearInterval(interval);
  }, [carregarBiblioteca]);

  // Filtro inteligente da biblioteca
  const perguntasFiltradas = useMemo(() => {
    return perguntas.filter(p => 
      p.label.toLowerCase().includes(termoBuscaBiblioteca.toLowerCase()) ||
      p.id.toLowerCase().includes(termoBuscaBiblioteca.toLowerCase())
    );
  }, [termoBuscaBiblioteca, perguntas]);

  const aplicarAutoLayout = (nodesParaAjustar, edgesParaAjustar, direcao = 'TB') => {
    dagreGraph.setGraph({ rankdir: direcao, marginx: 50, marginy: 50 });
    nodesParaAjustar.forEach((node) => dagreGraph.setNode(node.id, { width: 180, height: 60 }));
    edgesParaAjustar.forEach((edge) => dagreGraph.setEdge(edge.source, edge.target));
    dagre.layout(dagreGraph);

    return nodesParaAjustar.map((node) => {
      const nodeWithPosition = dagreGraph.node(node.id);
      return {
        ...node,
        position: { x: nodeWithPosition.x - 90, y: nodeWithPosition.y - 30 },
      };
    });
  };

  const toggleSelecao = (id) => {
    setSelecionadas(prev => 
      prev.includes(id) ? prev.filter(sid => sid !== id) : [...prev, id]
    );
  };

  const adicionarSelecionadas = () => {
    const novas = perguntas.filter(p => selecionadas.includes(p.id));
    const novosNodes = novas.map((p, index) => ({
      id: `node_${p.id}_${Date.now()}_${index}`,
      type: 'perguntaNode',
      position: { x: 300, y: 100 + (index * 70) },
      data: p
    }));
    setNodes(nds => nds.concat(novosNodes));
    setSelecionadas([]);
  };

  const onNodesChange = useCallback((chs) => setNodes((nds) => applyNodeChanges(chs, nds)), []);
  const onEdgesChange = useCallback((chs) => setEdges((eds) => applyEdgeChanges(chs, eds)), []);
  const onConnect = useCallback((params) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)), []);

  const abrirModalBusca = async () => {
    try {
      const quizes = await dataService.getQuestionarios();
      const filtrados = busca.trim() 
        ? quizes.filter(q => q.id.includes(busca) || q.nome.toLowerCase().includes(busca.toLowerCase())) 
        : quizes;
      setSearchResults(filtrados);
      setIsSearchModalOpen(true);
    } catch (err) { alert("Erro ao buscar questionários."); }
  };

  const carregarFluxoQuestionario = async (quiz) => {
    try {
      setQuizAtivo(quiz);
      setIsSearchModalOpen(false);
      const { data: perguntasAtuais } = await dataService.getPerguntas();

      const [vincRes, layoutRes] = await Promise.all([
        dataService.getVinculos(quiz.id),
        dataService.getLayout(quiz.id)
      ]);

      const vinculo = vincRes[0]; 
      const layout = layoutRes[0];

      if (vinculo && vinculo.connections) {
        const novasEdges = vinculo.connections.map(conn => ({
          id: `e-${conn.source}-${conn.target}`,
          source: conn.source, target: conn.target, animated: true
        }));

        const idsDosNos = layout ? layout.nodes.map(n => n.id) : [quiz.id, ...vinculo.connections.map(c => c.target)];
        const novosNodes = idsDosNos.map(idNode => {
          const posSalva = layout?.nodes.find(l => l.id === idNode)?.position;
          if (idNode === quiz.id) return { id: idNode, type: 'quizNode', data: quiz, position: posSalva || { x: 250, y: 50 } };
          const idOriginal = idNode.replace('node_', '').split('_')[0];
          const pData = perguntasAtuais.find(p => p.id === idOriginal);
          return {
            id: idNode, type: 'perguntaNode', data: pData || { id: idOriginal, label: '...' },
            position: posSalva || { x: Math.random() * 400, y: Math.random() * 200 }
          };
        });

        setNodes(!layout ? aplicarAutoLayout(novosNodes, novasEdges) : novosNodes);
        setEdges(novasEdges);
      } else {
        setNodes([{ id: quiz.id, type: 'quizNode', data: quiz, position: { x: 250, y: 50 } }]);
        setEdges([]);
      }
    } catch (err) { alert("Erro ao carregar dados."); }
  };

  const salvarTudo = async () => {
    if (!quizAtivo) return;
    const temPerguntas = nodes.some(n => n.type === 'perguntaNode');
    try {
      if (!temPerguntas) {
        await dataService.deleteVinculos(quizAtivo.id);
        alert("Vínculos removidos.");
        setNodes([{ id: quizAtivo.id, type: 'quizNode', data: quizAtivo, position: { x: 250, y: 50 } }]);
        setEdges([]);
      } else {
        await Promise.all([dataService.saveVinculos(quizAtivo.id, nodes, edges), dataService.saveLayout(quizAtivo.id, nodes)]);
        alert("Salvo!");
      }
    } catch (err) { alert("Erro ao sincronizar."); }
  };

  return (
    <div className="flex flex-col h-screen bg-zinc-950 text-white">
      <header className="p-4 bg-zinc-900 border-b border-zinc-800 flex gap-4 items-center">
        <div className="flex items-center gap-2 mr-4">
          <div className="w-2 h-2 rounded-none bg-blue-600 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Designer Flow</span>
        </div>
        
        <div className="relative flex items-center">
           <Search size={14} className="absolute left-3 text-zinc-600" />
           <input 
            className="bg-zinc-950 border border-zinc-800 p-2 pl-9 rounded-none text-xs w-64 focus:border-blue-600 outline-none transition-all" 
            placeholder="Buscar Questionário..." 
            value={busca} onChange={e => setBusca(e.target.value)} 
            onKeyDown={e => e.key === 'Enter' && abrirModalBusca()}
          />
          <button onClick={abrirModalBusca} className="bg-blue-600 hover:bg-blue-500 px-4 h-full py-2 ml-1 rounded-none text-[10px] font-black uppercase">
            Buscar
          </button>
        </div>

        {quizAtivo && <span className="text-[10px] bg-blue-600/10 text-blue-500 border border-blue-500/20 px-3 py-1.5 rounded-none font-bold uppercase">Ativo: {quizAtivo.nome}</span>}

        <div className="ml-auto flex gap-2">
          <button onClick={() => setNodes(aplicarAutoLayout(nodes, edges))} className="bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-none text-[10px] font-bold border border-zinc-700 uppercase">Organizar</button>
          <button onClick={salvarTudo} className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-none text-[10px] font-black uppercase">Salvar na API</button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* SIDEBAR DE CONSULTA E BIBLIOTECA */}
        <aside className="w-80 bg-zinc-900 border-r border-zinc-800 flex flex-col">
          <div className="p-4 border-b border-zinc-800 space-y-4">
            <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Biblioteca de Questões</h4>
            <div className="relative">
              <Search size={14} className="absolute left-3 top-3 text-zinc-600" />
              <input 
                className="w-full bg-zinc-950 border border-zinc-800 p-3 pl-10 rounded-none text-xs outline-none focus:border-blue-600"
                placeholder="Consultar questões..."
                value={termoBuscaBiblioteca}
                onChange={e => setTermoBuscaBiblioteca(e.target.value)}
              />
            </div>
            
            <AnimatePresence>
              {selecionadas.length > 0 && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                  onClick={adicionarSelecionadas}
                  className="w-full bg-blue-600 hover:bg-blue-500 p-3 rounded-none text-[10px] font-black flex items-center justify-center gap-2 uppercase"
                >
                  Adicionar {selecionadas.length} selecionadas <Plus size={14} />
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2 custom-scrollbar">
            {perguntasFiltradas.map(p => (
              <div 
                key={p.id}
                onClick={() => toggleSelecao(p.id)}
                className={`p-4 rounded-none border transition-all cursor-pointer group relative flex items-center gap-3
                  ${selecionadas.includes(p.id) ? 'bg-blue-600/10 border-blue-600' : 'bg-zinc-950 border-zinc-800 hover:border-zinc-700'}`}
              >
                <div className={`w-5 h-5 rounded-none border flex items-center justify-center transition-all
                  ${selecionadas.includes(p.id) ? 'bg-blue-600 border-blue-600' : 'bg-zinc-900 border-zinc-800'}`}>
                  {selecionadas.includes(p.id) && <Check size={12} strokeWidth={4} />}
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-xs font-bold truncate">{p.label}</p>
                  <p className="text-[9px] text-zinc-600 font-mono mt-0.5">{p.id}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>

        <main className="flex-1 relative">
          <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect} nodeTypes={nodeTypes} deleteKeyCode={["Backspace", "Delete"]} fitView>
            <Background color="#18181b" gap={20} variant="dots" />
            <Controls className="bg-zinc-900 fill-white border-zinc-800" />
          </ReactFlow>

          {/* Search Modal */}
          <AnimatePresence>
            {isSearchModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-zinc-950 border border-zinc-800 rounded-none w-full max-w-lg shadow-2xl flex flex-col max-h-[80vh]"
                >
                  <div className="flex justify-between items-center p-6 border-b border-zinc-800 bg-zinc-900">
                    <div>
                      <h2 className="text-lg font-black text-white uppercase">Selecionar Questionário</h2>
                      <p className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase mt-1">Resultados da busca</p>
                    </div>
                    <button onClick={() => setIsSearchModalOpen(false)} className="text-zinc-500 hover:text-white p-2">
                      <X size={20} />
                    </button>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
                    {searchResults.length === 0 ? (
                      <p className="text-center text-zinc-500 text-xs py-8">Nenhum questionário encontrado.</p>
                    ) : (
                      searchResults.map(q => (
                        <div 
                          key={q.id} 
                          onClick={() => carregarFluxoQuestionario(q)}
                          className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-none cursor-pointer hover:bg-zinc-900 hover:border-blue-600 transition-all flex flex-col"
                        >
                          <span className="font-bold text-sm text-zinc-100">{q.nome}</span>
                          <span className="text-[10px] font-mono text-zinc-500 mt-1 uppercase tracking-widest">ID: {q.id}</span>
                        </div>
                      ))
                    )}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

        </main>
      </div>

      <AnimatePresence>
        {isFallback && (
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className="fixed bottom-4 right-4 bg-amber-600/90 backdrop-blur text-white px-4 py-3 font-bold text-xs shadow-2xl flex items-center gap-3 z-50 rounded-none border border-amber-400">
            <span className="text-xl leading-none">⚠️</span>
            <div>
              <p className="uppercase tracking-widest text-[10px]">Modo de Fallback (Mock)</p>
              <p className="font-normal opacity-90 text-[10px] mt-0.5">A API principal não está acessível.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
