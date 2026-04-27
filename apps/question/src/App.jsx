import React, { useState, useEffect } from 'react';
import { dataService } from 'shared-data';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [list, setList] = useState([]);
  const [form, setForm] = useState({ label: '', id: '', codigo: '' });
  const [editingId, setEditingId] = useState(null);
  const [abaAtiva, setAbaAtiva] = useState('lista');
  const [isLoading, setIsLoading] = useState(true);

  const carregar = async () => {
    setIsLoading(true);
    try {
      const dados = await dataService.getPerguntas();
      setList(dados);
    } catch (err) { console.error(err); }
    finally { setIsLoading(false); }
  };

  useEffect(() => { carregar(); }, []);

  const salvar = async () => {
    if (!form.label || !form.id) return alert("Campos obrigatórios!");
    const payload = { 
      id: editingId || form.id.toLowerCase().trim().replace(/\s+/g, '_').replace(/[^\w]/g, ''), 
      label: form.label, codigoVenda: form.codigo, type: 'perguntaNode' 
    };

    try {
      if (editingId) await dataService.updatePergunta(editingId, payload);
      else await dataService.addPergunta(payload);
      setForm({ label: '', id: '', codigo: '' });
      setEditingId(null);
      setAbaAtiva('lista');
      carregar();
    } catch (err) { alert("Erro na API"); }
  };

  const excluir = async (id) => {
    const vinculado = await dataService.isItemVinculado(id, 'perguntaNode');
    if (vinculado) return alert("⚠️ Esta pergunta está sendo usada em um fluxo e não pode ser removida.");
    if (!confirm("Deseja excluir esta questão?")) return;
    try {
      await dataService.deletePergunta(id);
      carregar();
    } catch (err) { alert("Erro ao excluir."); }
  };

  const Skeleton = () => (
    <div className="space-y-3">
      {[1, 2, 3].map(i => (
        <div key={i} className="p-5 bg-zinc-900/40 border border-zinc-800 rounded-none flex justify-between items-center animate-pulse">
          <div className="space-y-2 w-1/2"><div className="h-4 bg-zinc-800 rounded-none w-3/4" /><div className="h-3 bg-zinc-800 rounded-none w-1/4" /></div>
          <div className="h-8 w-16 bg-zinc-800 rounded-none" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="p-8 bg-zinc-950 text-white min-h-screen font-sans">
      <header className="flex justify-between items-center mb-10 border-b border-zinc-900 pb-6">
        <div>
          <h2 className="text-2xl font-black text-zinc-100 tracking-tighter uppercase">Questões</h2>
          <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-1">Database Management</p>
        </div>
        <div className="flex gap-1 bg-zinc-900 p-1 rounded-none border border-zinc-800">
          <button onClick={() => setAbaAtiva('lista')} className={`px-6 py-2 rounded-none text-xs font-bold transition-all ${abaAtiva === 'lista' ? 'bg-blue-600 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>Questões Ativas</button>
          <button onClick={() => { setAbaAtiva('form'); setEditingId(null); setForm({label:'', id:'', codigo:''}); }} className={`px-6 py-2 rounded-none text-xs font-bold transition-all ${abaAtiva === 'form' ? 'bg-blue-600 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>{editingId ? 'Editando' : 'Nova Questão'}</button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {abaAtiva === 'lista' ? (
            <motion.div key="lista" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              {isLoading ? <Skeleton /> : (
                <div className="space-y-3">
                  {list.map(q => (
                    <div key={q.id} className="p-5 bg-zinc-900/40 border border-zinc-800 rounded-none flex justify-between items-center group hover:border-blue-500/40 transition-all">
                      <div>
                        <h3 className="font-bold text-zinc-200">{q.label}</h3>
                        <div className="flex gap-3 mt-1 text-[10px] font-mono text-zinc-500"><span className="text-blue-500">{q.id}</span>{q.codigoVenda && <span>| SKU: {q.codigoVenda}</span>}</div>
                      </div>
                      <div className="flex gap-4">
                        <button onClick={() => { setEditingId(q.id); setForm({label: q.label, id: q.id, codigo: q.codigoVenda || ''}); setAbaAtiva('form'); }} className="text-blue-400 text-[10px] font-black uppercase hover:underline transition-all">Editar</button>
                        <button onClick={() => excluir(q.id)} className="text-red-500 text-[10px] font-black uppercase hover:underline transition-all">Excluir</button>
                      </div>
                    </div>
                  ))}
                  {list.length === 0 && <p className="text-center text-zinc-600 py-10 italic">Nenhuma questão encontrada.</p>}
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div key="form" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="max-w-md mx-auto space-y-4 bg-zinc-900 p-10 rounded-none border border-zinc-800">
              <div className="text-center mb-6"><h3 className="text-xl font-bold">{editingId ? 'Atualizar Pergunta' : 'Nova Pergunta'}</h3><p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Preencha os campos abaixo</p></div>
              <input placeholder="ID Único" disabled={!!editingId} className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-none font-mono text-sm focus:border-blue-600 outline-none disabled:opacity-30" value={form.id} onChange={e => setForm({...form, id: e.target.value})} />
              <input placeholder="Título / Pergunta" className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-none text-sm focus:border-blue-600 outline-none" value={form.label} onChange={e => setForm({...form, label: e.target.value})} />
              <input placeholder="Código de Venda" className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-none text-sm focus:border-blue-600 outline-none" value={form.codigo} onChange={e => setForm({...form, codigo: e.target.value})} />
              <button onClick={salvar} className="w-full bg-blue-600 p-4 rounded-none font-black uppercase tracking-widest">{editingId ? 'Salvar Alterações' : 'Salvar na API'}</button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
