import React, { useState } from 'react';
import { Users, Search, Plus, UserPlus } from 'lucide-react';

export default function App() {
  const [grupos] = useState([
    { id: 'g1', nome: 'Turma Alpha 2026', participantes: 24, descricao: 'Grupo principal de treinamento', status: 'ACTIVE' },
    { id: 'g2', nome: 'Workshop Salesforce', participantes: 15, descricao: 'Capacitação em CRM', status: 'ACTIVE' },
    { id: 'g3', nome: 'Onboarding Maio', participantes: 8, descricao: 'Programa de integração', status: 'INACTIVE' },
  ]);
  const [busca, setBusca] = useState('');

  const filtrados = grupos.filter(g =>
    g.nome.toLowerCase().includes(busca.toLowerCase()) ||
    g.descricao.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="p-8 bg-zinc-950 text-white min-h-screen font-sans">
      <header className="flex justify-between items-center mb-10 border-b border-zinc-900 pb-6">
        <div>
          <h2 className="text-2xl font-black text-zinc-100 tracking-tighter uppercase">Grupos</h2>
          <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-1">Gerenciamento de Turmas</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all">
          <Plus size={14} />
          Novo Grupo
        </button>
      </header>

      <div className="flex gap-4 mb-6 bg-zinc-900 p-4 border border-zinc-800 rounded-none items-center">
        <div className="flex-1 flex relative">
          <div className="bg-zinc-950 border border-zinc-800 border-r-0 p-3 flex items-center">
            <Search size={14} className="text-zinc-500" />
          </div>
          <input
            placeholder="Buscar por nome ou descrição..."
            className="w-full bg-zinc-950 border border-zinc-800 p-3 pl-3 rounded-none text-xs focus:border-blue-600 outline-none"
            value={busca}
            onChange={e => setBusca(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-3">
        {filtrados.map(g => (
          <div key={g.id} className="p-5 bg-zinc-900/40 border border-zinc-800 rounded-none hover:border-blue-500/40 transition-all">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-zinc-700 rounded-none flex items-center justify-center">
                  <Users size={18} className="text-zinc-400" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-200">{g.nome}</h3>
                  <p className="text-[10px] text-zinc-500 mt-1">{g.descricao}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`text-[9px] px-3 py-1 font-bold uppercase tracking-widest border ${g.status === 'ACTIVE' ? 'bg-emerald-600/20 text-emerald-500 border-emerald-500/20' : 'bg-red-600/20 text-red-500 border-red-500/20'}`}>
                  {g.status}
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4 pt-4 border-t border-zinc-800">
              <div className="flex items-center gap-4">
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest flex items-center gap-1">
                  <UserPlus size={12} />
                  {g.participantes} participantes
                </span>
              </div>
              <div className="flex gap-3">
                <button className="text-blue-400 text-[10px] font-black uppercase hover:underline transition-all">Editar</button>
                <button className="text-zinc-400 text-[10px] font-black uppercase hover:text-white transition-all">Gerenciar</button>
              </div>
            </div>
          </div>
        ))}
        {filtrados.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 px-4 text-center space-y-4">
            <div className="text-5xl grayscale opacity-50">👥</div>
            <div>
              <h4 className="text-sm font-bold text-zinc-300 uppercase tracking-widest">Nenhum grupo encontrado</h4>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-2">Crie um novo grupo para começar</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}