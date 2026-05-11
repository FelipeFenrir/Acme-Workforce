import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, path.resolve(__dirname, '../../../../../'), 'VITE_');
  const port = parseInt(env.VITE_PORT_ORDER) || 9103;

  return {
    plugins: [
      react(),
      federation({
        name: 'orderquestionnaire',
        filename: 'remoteEntry.js',
        exposes: {
          './App': './src/App.jsx'
        },
        shared: {
          'react': { singleton: true, requiredVersion: '^18.0.0' },
          'react-dom': { singleton: true, requiredVersion: '^18.0.0' }
        }
      })
    ],
    define: {
      'import.meta.env.VITE_APP_ENV': JSON.stringify(env.VITE_APP_ENV || 'dev'),
    },
    resolve: {
      alias: {
        'shared-data': path.resolve(__dirname, '../../../../../packages/shared-data/index.js'),
        'ui': path.resolve(__dirname, '../../../../../packages/ui')
      }
    },
    css: {
      postcss: path.resolve(__dirname, '../../../../../postcss.config.js'),
    },
    server: {
      port: port,
      strictPort: true,
      proxy: {
        '/api/v1': {
          target: 'http://localhost:9005',
          changeOrigin: true
        }
      },
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
      setupFiles: '../../../../../vitest.setup.js',
      css: true,
    }
  };
});
