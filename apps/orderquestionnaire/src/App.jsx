import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { ReactFlow, Background, Controls, addEdge, applyNodeChanges, applyEdgeChanges } from 'reactflow';
import 'reactflow/dist/style.css';
import { dataService } from 'shared-data';
import { CustomNode } from './components/CustomNode';
import dagre from '@dagrejs/dagre';
import { Search, Plus, Check, Trash2, LayoutGrid } from 'lucide-react';
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
  const [quizAtivo, setQuizAtivo] = useState(null);

  const carregarBiblioteca = useCallback(async () => {
    try {
      const data = await dataService.getPerguntas();
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

  const buscarQuestionario = async () => {
    try {
      const [quizes, perguntasAtuais] = await Promise.all([
        dataService.getQuestionarios(),
        dataService.getPerguntas()
      ]);
      const quiz = quizes.find(q => q.id === busca || q.nome.includes(busca));
      if (!quiz) return alert("Questionário não encontrado.");
      setQuizAtivo(quiz);

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
      <header className="p-4 bg-zinc-900 border-b border-zinc-800 flex gap-4 items-center shadow-lg">
        <div className="flex items-center gap-2 mr-4">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Designer Flow</span>
        </div>
        
        <div className="relative">
           <Search size={14} className="absolute left-3 top-2.5 text-zinc-600" />
           <input 
            className="bg-zinc-950 border border-zinc-800 p-2 pl-9 rounded-lg text-xs w-64 focus:border-blue-600 outline-none transition-all" 
            placeholder="Buscar ID ou Nome do Questionário..." 
            value={busca} onChange={e => setBusca(e.target.value)} 
            onKeyDown={e => e.key === 'Enter' && buscarQuestionario()}
          />
        </div>

        {quizAtivo && <span className="text-[10px] bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-3 py-1.5 rounded-full font-bold uppercase">Ativo: {quizAtivo.nome}</span>}

        <div className="ml-auto flex gap-2">
          <button onClick={() => setNodes(aplicarAutoLayout(nodes, edges))} className="bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg text-[10px] font-bold border border-zinc-700 uppercase">Organizar</button>
          <button onClick={salvarTudo} className="bg-emerald-600 hover:bg-emerald-500 px-6 py-2 rounded-lg text-[10px] font-black uppercase shadow-lg shadow-emerald-900/20">Salvar na API</button>
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
                className="w-full bg-zinc-950 border border-zinc-800 p-3 pl-10 rounded-xl text-xs outline-none focus:border-blue-600"
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
                  className="w-full bg-blue-600 hover:bg-blue-500 p-3 rounded-xl text-[10px] font-black flex items-center justify-center gap-2 shadow-lg shadow-blue-900/40 uppercase"
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
                className={`p-4 rounded-2xl border transition-all cursor-pointer group relative flex items-center gap-3
                  ${selecionadas.includes(p.id) ? 'bg-blue-600/10 border-blue-600' : 'bg-zinc-950 border-zinc-800 hover:border-zinc-700'}`}
              >
                <div className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-all
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
        </main>
      </div>
    </div>
  );
}
