import React from 'react';
import { motion } from 'framer-motion';

export function VinculadoModal({ isOpen, onClose, message = 'Este item possui vínculos ativos e não pode ser removido.' }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="bg-zinc-900 border border-zinc-800 p-8 max-w-sm w-full text-center space-y-6">
        <div className="w-16 h-16 bg-amber-500/10 text-amber-500 rounded-none flex items-center justify-center mx-auto border border-amber-500/20">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        </div>
        <div>
          <h4 className="text-lg font-bold">Item Vinculado</h4>
          <p className="text-xs text-zinc-500 mt-2 uppercase tracking-widest leading-relaxed">{message}</p>
        </div>
        <button onClick={onClose} className="w-full bg-zinc-800 hover:bg-zinc-700 py-3 text-[10px] font-black uppercase tracking-widest transition-all">Entendido</button>
      </motion.div>
    </div>
  );
}