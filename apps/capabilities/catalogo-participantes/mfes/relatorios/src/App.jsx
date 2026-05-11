import React, { useState } from 'react';
import { BarChart3, FileText, Download, Calendar } from 'lucide-react';

export default function App() {
  const [relatorios] = useState([
    { id: 'r1', nome: 'Participantes por Grupo', tipo: 'PARTICIPANTES', geradoEm: '2026-05-10', formato: 'PDF' },
    { id: 'r2', nome: 'Atividade por Instrutor', tipo: 'ATIVIDADE', geradoEm: '2026-05-09', formato: 'XLSX' },
    { id: 'r3', nome: 'Taxa de Conclusão', tipo: 'CONCLUSAO', geradoEm: '2026-05-08', formato: 'PDF' },
    { id: 'r4', nome: 'Evolução por Aluno', tipo: 'EVOLUCAO', geradoEm: '2026-05-07', formato: 'PDF' },
  ]);

  return (
    <div className="p-8 bg-zinc-950 text-white min-h-screen font-sans">
      <header className="flex justify-between items-center mb-10 border-b border-zinc-900 pb-6">
        <div>
          <h2 className="text-2xl font-black text-zinc-100 tracking-tighter uppercase">Relatórios</h2>
          <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-1">Análise de Dados</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all">
          <FileText size={14} />
          Gerar Relatório
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-none">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Total Participantes</span>
            <BarChart3 size={16} className="text-blue-500" />
          </div>
          <p className="text-3xl font-black text-white">47</p>
          <p className="text-[10px] text-emerald-500 mt-2 font-bold uppercase tracking-widest">+12 este mês</p>
        </div>
        <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-none">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Grupos Ativos</span>
            <BarChart3 size={16} className="text-purple-500" />
          </div>
          <p className="text-3xl font-black text-white">5</p>
          <p className="text-[10px] text-emerald-500 mt-2 font-bold uppercase tracking-widest">2 em andamento</p>
        </div>
        <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-none">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Taxa de Conclusão</span>
            <BarChart3 size={16} className="text-emerald-500" />
          </div>
          <p className="text-3xl font-black text-white">78%</p>
          <p className="text-[10px] text-emerald-500 mt-2 font-bold uppercase tracking-widest">+5% vs. anterior</p>
        </div>
      </div>

      <div className="bg-zinc-900/40 border border-zinc-800 rounded-none">
        <div className="p-4 border-b border-zinc-800">
          <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-widest">Relatórios Recentes</h3>
        </div>
        <div className="divide-y divide-zinc-800">
          {relatorios.map(r => (
            <div key={r.id} className="p-4 flex justify-between items-center hover:bg-zinc-900/40 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-zinc-800 rounded-none flex items-center justify-center">
                  <FileText size={18} className="text-zinc-500" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-200 text-sm">{r.nome}</h4>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest flex items-center gap-1">
                      <Calendar size={10} />
                      {r.geradoEm}
                    </span>
                    <span className="text-[9px] px-2 py-0.5 font-bold uppercase tracking-widest bg-zinc-800 text-zinc-400 border border-zinc-700">
                      {r.formato}
                    </span>
                  </div>
                </div>
              </div>
              <button className="flex items-center gap-2 text-blue-400 text-[10px] font-black uppercase hover:underline transition-all">
                <Download size={12} />
                Baixar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}