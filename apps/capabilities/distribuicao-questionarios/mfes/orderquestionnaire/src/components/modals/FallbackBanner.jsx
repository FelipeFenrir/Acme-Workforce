import React from 'react';
import { motion } from 'framer-motion';

export function FallbackBanner({ isFallback }) {
  if (!isFallback) return null;

  return (
    <motion.div 
      key="fallback-banner"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: 50 }} 
      className="fixed bottom-6 right-6 bg-amber-600/90 backdrop-blur-lg text-white px-6 py-4 font-bold shadow-2xl flex items-center gap-4 z-[100] border border-amber-400/50"
    >
      <div className="w-10 h-10 bg-amber-400/20 flex items-center justify-center rounded-none">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <div>
        <p className="uppercase tracking-[0.2em] text-[10px] font-black">Offline Fallback</p>
        <p className="font-medium opacity-80 text-[10px] mt-1">Conexão com a API Java perdida. Usando dados locais.</p>
      </div>
    </motion.div>
  );
}