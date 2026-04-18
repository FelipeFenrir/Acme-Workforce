import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  // 1. Carrega o .env da raiz do monorepo (subindo dois níveis: apps/seu-app -> raiz)
  const env = loadEnv(mode, path.resolve(__dirname, '../../'), 'VITE_');

  // 2. Identifica qual porta usar baseado no nome da pasta ou em um fallback
  // Você pode usar uma lógica baseada no nome do app ou uma variável específica
  const port = parseInt(env.VITE_PORT_SHELL) || 3000;

  return {
    plugins: [react()],
    resolve: {
      alias: {
        'shared-data': path.resolve(__dirname, '../../packages/shared-data/index.js'),
        'ui': path.resolve(__dirname, '../../packages/ui')
      }
    },
    css: {
      postcss: path.resolve(__dirname, '../../postcss.config.js'),
    },
    server: {
      port: port,
      strictPort: true, // Garante que o app falhe se a porta estiver ocupada, evitando conflitos
    }
  };
});
