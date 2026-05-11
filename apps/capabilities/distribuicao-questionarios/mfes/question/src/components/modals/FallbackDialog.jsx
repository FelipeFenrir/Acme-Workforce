import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export function FallbackDialog({ fallbackDialog, onClose, onConfirm }) {
  if (!fallbackDialog) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        className="bg-zinc-900 border border-zinc-800 p-8 max-w-sm w-full text-center space-y-6"
      >
        <div className="w-16 h-16 bg-amber-500/10 text-amber-500 rounded-none flex items-center justify-center mx-auto border border-amber-500/20">
          <Zap size={32} />
        </div>
        <div>
          <h4 className="text-lg font-bold text-white">{fallbackDialog.title}</h4>
          <p className="text-xs text-zinc-500 mt-2 uppercase tracking-widest leading-relaxed">
            {fallbackDialog.message}
          </p>
        </div>
        <div className="flex gap-4 pt-2">
          <button 
            onClick={onClose} 
            className="flex-1 bg-zinc-800 hover:bg-zinc-700 py-3 text-[10px] font-black uppercase tracking-widest transition-all"
          >
            {fallbackDialog.cancelText}
          </button>
          <button 
            onClick={onConfirm} 
            className="flex-1 bg-amber-600 hover:bg-amber-700 py-3 text-[10px] font-black uppercase tracking-widest transition-all"
          >
            {fallbackDialog.confirmText}
          </button>
        </div>
      </motion.div>
    </div>
  );
}