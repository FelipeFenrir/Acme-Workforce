import React from 'react';
import { motion } from 'framer-motion';

export function DeleteModal({ isOpen, onClose, onConfirm, title = 'Excluir Item?', message = 'Esta ação não pode ser desfeita.' }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="bg-zinc-900 border border-zinc-800 p-8 max-w-sm w-full text-center space-y-6">
        <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-none flex items-center justify-center mx-auto border border-red-500/20">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
        </div>
        <div>
          <h4 className="text-lg font-bold">{title}</h4>
          <p className="text-xs text-zinc-500 mt-2 uppercase tracking-widest">{message}</p>
        </div>
        <div className="flex gap-4 pt-2">
          <button onClick={onClose} className="flex-1 bg-zinc-800 hover:bg-zinc-700 py-3 text-[10px] font-black uppercase tracking-widest transition-all">Cancelar</button>
          <button onClick={onConfirm} className="flex-1 bg-red-600 hover:bg-red-700 py-3 text-[10px] font-black uppercase tracking-widest transition-all">Excluir</button>
        </div>
      </motion.div>
    </div>
  );
}