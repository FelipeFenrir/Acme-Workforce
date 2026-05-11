import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export function ErrorToast({ apiError, onClose }) {
  if (!apiError) return null;

  const isServerError = apiError.status >= 500;

  return (
    <motion.div 
      key="error-toast"
      initial={{ opacity: 0, x: 50 }} 
      animate={{ opacity: 1, x: 0 }} 
      exit={{ opacity: 0, x: 50 }} 
      className="fixed top-24 right-6 bg-red-600 text-white px-6 py-4 shadow-2xl z-[100] border-l-4 border-red-400 flex items-center gap-4 max-w-md"
    >
      <div className="bg-red-500 p-2"><X size={16} /></div>
      <div className="flex-1">
        <p className="text-[10px] font-black uppercase tracking-widest opacity-70">
          {isServerError ? 'Erro de Servidor' : 'Falha de Validação'} ({apiError.status})
        </p>
        <p className="text-xs font-bold mt-0.5">{apiError.message}</p>
        {apiError.detail && (
          <p className="text-[10px] mt-2 p-2 bg-black/20 font-medium leading-relaxed border-l border-white/20">
            {apiError.detail}
          </p>
        )}
      </div>
      <button onClick={onClose} className="p-1 hover:bg-white/10 transition-all"><X size={14} /></button>
    </motion.div>
  );
}