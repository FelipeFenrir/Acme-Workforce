import React, { useState } from 'react';
import { Users as UsersIcon, Search, Plus, Filter } from 'lucide-react';

export default function App() {
  const [participantes] = useState([
    { id: 'p1', nome: 'Ana Silva', email: 'ana.silva@acme.com', status: 'ACTIVE', tipo: 'ALUNO' },
    { id: 'p2', nome: 'Bruno Costa', email: 'bruno.costa@acme.com', status: 'ACTIVE', tipo: 'INSTRUTOR' },
    { id: 'p3', nome: 'Carla Mendes', email: 'carla.mendes@acme.com', status: 'INACTIVE', tipo: 'ALUNO' },
  ]);
  const [busca, setBusca] = useState('');

  const filtrados = participantes.filter(p =>
    p.nome.toLowerCase().includes(busca.toLowerCase()) ||
    p.email.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="p-8 bg-zinc-950 text-white min-h-screen font-sans">
      <header className="flex justify-between items-center mb-10 border-b border-zinc-900 pb-6">
        <div>
          <h2 className="text-2xl font-black text-zinc-100 tracking-tighter uppercase">Participantes</h2>
          <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-1">Catálogo de Usuários</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all">
          <Plus size={14} />
          Novo Participante
        </button>
      </header>

      <div className="flex gap-4 mb-6 bg-zinc-900 p-4 border border-zinc-800 rounded-none items-center">
        <div className="flex-1 flex relative">
          <div className="bg-zinc-950 border border-zinc-800 border-r-0 p-3 flex items-center">
            <Search size={14} className="text-zinc-500" />
          </div>
          <input
            placeholder="Buscar por nome ou email..."
            className="w-full bg-zinc-950 border border-zinc-800 p-3 pl-3 rounded-none text-xs focus:border-blue-600 outline-none"
            value={busca}
            onChange={e => setBusca(e.target.value)}
          />
        </div>
        <button className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-4 py-3 text-xs font-bold border border-zinc-700 transition-all">
          <Filter size={14} />
          Filtros
        </button>
      </div>

      <div className="space-y-3">
        {filtrados.map(p => (
          <div key={p.id} className="p-5 bg-zinc-900/40 border border-zinc-800 rounded-none flex justify-between items-center group hover:border-blue-500/40 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-zinc-700 rounded-none flex items-center justify-center">
                <UsersIcon size={18} className="text-zinc-400" />
              </div>
              <div>
                <h3 className="font-bold text-zinc-200 flex items-center gap-2">
                  {p.nome}
                  <span className={`text-[9px] px-2 py-0.5 font-bold uppercase tracking-widest border ${p.tipo === 'ALUNO' ? 'bg-blue-600/20 text-blue-400 border-blue-500/20' : 'bg-purple-600/20 text-purple-400 border-purple-500/20'}`}>
                    {p.tipo}
                  </span>
                </h3>
                <div className="text-[10px] font-mono text-zinc-500">{p.email}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className={`text-[9px] px-3 py-1 font-bold uppercase tracking-widest border ${p.status === 'ACTIVE' ? 'bg-emerald-600/20 text-emerald-500 border-emerald-500/20' : 'bg-red-600/20 text-red-500 border-red-500/20'}`}>
                {p.status}
              </span>
              <button className="text-blue-400 text-[10px] font-black uppercase hover:underline transition-all">Editar</button>
            </div>
          </div>
        ))}
        {filtrados.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 px-4 text-center space-y-4">
            <div className="text-5xl grayscale opacity-50">🔎</div>
            <div>
              <h4 className="text-sm font-bold text-zinc-300 uppercase tracking-widest">Nenhum participante encontrado</h4>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-2">Tente ajustar sua busca</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}