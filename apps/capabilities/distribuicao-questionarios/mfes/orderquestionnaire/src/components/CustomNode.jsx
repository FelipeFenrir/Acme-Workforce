import React from 'react';
import { Handle, Position } from 'reactflow';
import { HelpCircle, FileText, ChevronDown } from 'lucide-react';

export function CustomNode({ data, selected }) {
  const isQuiz = !!data.nome;
  
  return (
    <div className={`
      relative p-4 min-w-[200px] border transition-all duration-300
      ${selected ? 'ring-2 ring-blue-500 border-transparent shadow-[0_0_20px_rgba(59,130,246,0.3)]' : 'border-zinc-800 shadow-xl'}
      ${isQuiz ? 'bg-zinc-900' : 'bg-zinc-950'}
    `}>
      {/* Indicador lateral */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${
        isQuiz 
          ? data.status === 'INACTIVE' ? 'bg-rose-600' : 'bg-blue-600'
          : data.status === 'INACTIVE' ? 'bg-rose-800' : 'bg-zinc-700'
      }`} />

      <Handle type="target" position={Position.Top} className="!w-2 !h-2 !bg-zinc-700 !border-none !rounded-none" />
      
      <div className="flex items-start gap-3">
        <div className={`p-2 ${isQuiz ? 'bg-blue-600/10 text-blue-500' : 'bg-zinc-900 text-zinc-500'}`}>
          {isQuiz ? <FileText size={14} /> : <HelpCircle size={14} />}
        </div>
        
        <div className="flex-1 overflow-hidden">
          <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest leading-none mb-1">
            {isQuiz ? 'Questionário Principal' : 'Configuração de Pergunta'}
          </p>
          <div className="flex justify-between items-start gap-2">
            <h3 className="text-xs font-bold text-zinc-100 truncate">
              {isQuiz ? data.nome : data.label}
            </h3>
            <span className={`text-[7px] font-black px-1 py-0.5 rounded-none border shrink-0 ${
              data.status === 'ACTIVE'   ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' :
              data.status === 'INACTIVE' ? 'bg-rose-500/10   text-rose-500   border-rose-500/20' :
                                           'bg-zinc-800      text-zinc-500   border-zinc-700'
            }`}>
              {data.status || 'DRAFT'}
            </span>
          </div>
          <p className="text-[9px] font-mono text-zinc-700 mt-1 uppercase tracking-tighter">
            {data.id}
          </p>
        </div>
      </div>

      {data.config && !isQuiz && (
        <div className="mt-3 pt-3 border-t border-zinc-900 flex justify-between items-center">
          <div className="flex gap-1">
            <span className="px-1.5 py-0.5 bg-zinc-900 text-zinc-500 text-[8px] font-black border border-zinc-800">
              ORDEM: {data.config.order || 0}
            </span>
            <span className="px-1.5 py-0.5 bg-blue-900/20 text-blue-400 text-[8px] font-black border border-blue-900/30">
              {data.config.answerConfig?.type || 'TEXT'}
            </span>
          </div>
          {data.config.rootCondition && (
            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" title="Tem condições de visibilidade" />
          )}
        </div>
      )}

      <Handle type="source" position={Position.Bottom} className="!w-2 !h-2 !bg-zinc-700 !border-none !rounded-none" />
      
      {/* Efeito de seleção suave */}
      {selected && (
        <div className="absolute inset-0 bg-blue-500/5 pointer-events-none" />
      )}
    </div>
  );
}
