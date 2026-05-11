import React from 'react';

export function MenuSuperior({ mfeLabel }) {
  return (
    <header className="h-16 border-b border-zinc-800 bg-zinc-900/50 flex items-center px-8 justify-between">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-none bg-blue-600" />
        <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">
          {mfeLabel}
        </span>
      </div>
    </header>
  );
}