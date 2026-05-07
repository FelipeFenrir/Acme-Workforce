import React, { useState, useEffect } from 'react';
import { dataService } from 'shared-data';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [list, setList] = useState([]);
  const [form, setForm] = useState({ nome: '', id: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [abaAtiva, setAbaAtiva] = useState('lista');
  const [isLoading, setIsLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(dataService.isFallbackActive);

  useEffect(() => {
    return dataService.subscribeToFallback(setIsFallback);
  }, []);

  const carregar = async () => {
    setIsLoading(true);
    try {
      const dados = await dataService.getQuestionarios();
      setList(dados);
    } catch (err) { console.error(err); }
    finally { setIsLoading(false); }
  };

  useEffect(() => { carregar(); }, []);

  const salvar = async () => {
    if (!form.nome || !form.id) return alert("Campos obrigatórios!");
    try {
      if (isEditing) await dataService.updateQuiz(form.id, { ...form, type: 'quizNode' });
      else {
        const idSnake = form.id.toLowerCase().trim().replace(/\s+/g, '_').replace(/[^\w]/g, '');
        await dataService.addQuiz({ id: idSnake, nome: form.nome, type: 'quizNode' });
      }
      setForm({ nome: '', id: '' });
      setIsEditing(false);
      setAbaAtiva('lista');
      carregar();
    } catch (err) { alert("Erro na API."); }
  };

  const excluir = async (id) => {
    const vinculado = await dataService.isItemVinculado(id, 'quizNode');
    if (vinculado) return alert("⚠️ Este questionário possui vínculos ativos no Designer e não pode ser removido.");
    if (!confirm("Deseja excluir este questionário?")) return;
    try {
      await dataService.deleteQuiz(id);
      await dataService.deleteVinculos(id); 
      carregar();
    } catch (err) { alert("Erro ao excluir."); }
  };

  const Skeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-none animate-pulse flex justify-between items-center">
          <div className="space-y-2 w-2/3"><div className="h-4 bg-zinc-800 rounded-none w-1/2" /><div className="h-3 bg-zinc-800 rounded-none w-1/3" /></div>
          <div className="h-6 w-12 bg-zinc-800 rounded-none" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="p-8 bg-zinc-950 text-white min-h-screen font-sans">
      <header className="flex justify-between items-center mb-10 border-b border-zinc-900 pb-6">
        <div><h2 className="text-2xl font-black text-zinc-100 tracking-tighter uppercase">Questionários</h2><p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-1">Survey Management</p></div>
        <div className="flex gap-1 bg-zinc-900 p-1 rounded-none border border-zinc-800">
          <button onClick={() => setAbaAtiva('lista')} className={`px-6 py-2 rounded-none text-xs font-bold transition-all ${abaAtiva === 'lista' ? 'bg-blue-600 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>Listagem</button>
          <button onClick={() => { setAbaAtiva('form'); setIsEditing(false); setForm({nome:'', id:''}); }} className={`px-6 py-2 rounded-none text-xs font-bold transition-all ${abaAtiva === 'form' ? 'bg-blue-600 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>{isEditing ? 'Editando' : 'Novo'}</button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {abaAtiva === 'lista' ? (
            <motion.div key="list-q" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              {isLoading ? <Skeleton /> : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {list.map(quiz => (
                    <div key={quiz.id} className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-none flex justify-between items-center group hover:border-blue-500/40 transition-all">
                      <div><h3 className="font-bold text-zinc-100">{quiz.nome}</h3><code className="text-[10px] text-zinc-500 uppercase tracking-widest">{quiz.id}</code></div>
                      <div className="flex gap-3">
                        <button onClick={() => { setForm(quiz); setIsEditing(true); setAbaAtiva('form'); }} className="text-blue-400 text-[10px] font-black uppercase hover:underline transition-all">Editar</button>
                        <button onClick={() => excluir(quiz.id)} className="text-red-500 text-[10px] font-black uppercase hover:underline transition-all">Excluir</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div key="form-q" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="max-w-md mx-auto space-y-6 bg-zinc-900 p-10 rounded-none border border-zinc-800">
              <div className="text-center"><h3 className="text-xl font-bold">{isEditing ? 'Editar Questionário' : 'Novo Questionário'}</h3><p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Configurações de Coleta</p></div>
              <input placeholder="ID de Referência" disabled={isEditing} className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-none font-mono text-sm focus:border-blue-600 outline-none disabled:opacity-30" value={form.id} onChange={e => setForm({...form, id: e.target.value})} />
              <input placeholder="Nome do Questionário" className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-none text-sm focus:border-blue-600 outline-none" value={form.nome} onChange={e => setForm({...form, nome: e.target.value})} />
              <div className="flex gap-4">
                <button onClick={() => { setAbaAtiva('lista'); setIsEditing(false); setForm({nome:'', id:''}); }} className="w-1/3 bg-zinc-800 p-4 rounded-none font-black uppercase tracking-widest hover:bg-zinc-700 transition-all text-xs">Cancelar</button>
                <button onClick={salvar} className="flex-1 bg-blue-600 p-4 rounded-none font-black uppercase tracking-widest text-xs">{isEditing ? 'Salvar Alterações' : 'Salvar na API'}</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

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
