import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';

export function CustomNode({ data }) {
  const [expanded, setExpanded] = useState(false);
  const isQuiz = !!data.nome;

  return (
    <div className={`p-3 rounded-lg border shadow-xl min-w-[180px] ${isQuiz ? 'bg-blue-900 border-blue-400' : 'bg-zinc-900 border-zinc-700'} text-white`}>
      <Handle type="target" position={Position.Top} className="w-2 h-2 !bg-blue-400" />
      
      <div className="flex justify-between items-center gap-2">
        <div className="flex flex-col">
          <span className="text-[9px] text-zinc-500 uppercase font-bold tracking-tighter">
            {isQuiz ? 'Questionário' : 'Questão'}
          </span>
          <span className="text-xs font-bold truncate max-w-[120px]">
            {isQuiz ? data.nome : data.label}
          </span>
        </div>
        <button 
          onClick={() => setExpanded(!expanded)}
          className="text-[9px] bg-zinc-800 p-1 rounded border border-zinc-600 hover:bg-zinc-700"
        >
          {expanded ? 'HIDE' : 'INFO'}
        </button>
      </div>

      {expanded && (
        <div className="mt-3 pt-2 border-t border-zinc-800 text-[10px] animate-in fade-in duration-200">
          <p className="flex justify-between font-mono text-zinc-400">
            ID: <span className="text-blue-300">{data.id}</span>
          </p>
          {!isQuiz && (
            <p className="flex justify-between font-mono text-zinc-400">
              CODE: <span className="text-emerald-400">{data.codigoVenda}</span>
            </p>
          )}
        </div>
      )}

      <Handle type="source" position={Position.Bottom} className="w-2 h-2 !bg-blue-400" />
    </div>
  );
}
