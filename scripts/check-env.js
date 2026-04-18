// scripts/check-env.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(__dirname, '../.env');

// Lista de variáveis obrigatórias para o ecossistema funcionar
const REQUIRED_VARS = [
  'VITE_PORT_SHELL',
  'VITE_PORT_QUESTIONS',
  'VITE_PORT_QUESTIONNAIRE',
  'VITE_PORT_ORDER',
  'VITE_URL_QUESTIONS',
  'VITE_URL_QUESTIONNAIRE',
  'VITE_URL_ORDER'
];

console.log("🔍 Verificando variáveis de ambiente...");

if (!fs.existsSync(envPath)) {
  console.error("❌ ERRO: Arquivo .env não encontrado na raiz!");
  process.exit(1);
}

const envContent = fs.readFileSync(envPath, 'utf-8');
const missing = REQUIRED_VARS.filter(v => !envContent.includes(v));

if (missing.length > 0) {
  console.error("❌ ERRO: As seguintes variáveis estão faltando no seu .env:");
  missing.forEach(v => console.error(`   - ${v}`));
  process.exit(1);
}

console.log("✅ Configurações validadas. Iniciando Turborepo...\n");
