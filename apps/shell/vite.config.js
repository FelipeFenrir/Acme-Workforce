import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, path.resolve(__dirname, '../../'), 'VITE_');
  const port = parseInt(env.VITE_PORT_SHELL) || 9100;

  return {
    plugins: [react()],
    define: {
      'import.meta.env.VITE_APP_ENV': JSON.stringify(env.VITE_APP_ENV || 'dev'),
    },
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
      proxy: {
        '/api/v1': {
          target: 'http://localhost:9005',
          changeOrigin: true
        }
      },
      strictPort: true,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    },
    build: {
      target: 'esnext',
      minify: false
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: '../../vitest.setup.js',
      css: true,
    }
  };
});
