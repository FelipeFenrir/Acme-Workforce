# Acme Workforce

Acme Workforce é uma plataforma construída em arquitetura de Micro Frontends (MFE). Este repositório funciona como um monorepo (usando Turborepo) que agrupa o Shell da plataforma e as diversas aplicações isoladas correspondentes a cada capacidade.

## 🎯 Capacidades e Funcionalidades

De acordo com o Hub principal (aplicação *Shell* da plataforma), possuímos as seguintes capacidades mapeadas e seu atual status de implementação:

### 1. Distribuição de Questionários
**Status:** ✅ Implementado  
**Descrição:** Gerencie o ciclo de vida de questionários na sua jornada de venda: criação de perguntas, montagem de questionários e designer de fluxo da Distribuição do Questionário na Jornada de Venda.  
**Micro Frontends Relacionados:**
- **Questões (`apps/question`)**: Gestão de banco e criação de perguntas.
- **Questionários (`apps/questionnaire`)**: Montagem e visualização de questionários formados.
- **Designer de Fluxo (`apps/orderquestionnaire`)**: Desenho da distribuição e fluxo do questionário na jornada.

### 2. Catálogo de Participantes
**Status:** 🚧 Não implementado (Módulo Futuro)  
**Descrição:** Gerencia Participantes da Plataforma: Canais de Distribuição, Manufaturas e Configurações de Parceiros.  

### 3. Contextualização de Ofertas
**Status:** 🚧 Não implementado (Módulo Futuro)  
**Descrição:** Organize suas Prateleiras e Jornadas de Venda: Adicione/Remova Ofertas em Jornadas de Venda ou Gerencia a relação entre Jornadas e Canais de Venda.  

### 4. Distribuição de Ofertas
**Status:** 🚧 Não implementado (Módulo Futuro)  
**Descrição:** Gerencia regras de Aderência de Ofertas em suas Jornadas de Venda: Crie regras de Aderência para Ofertas.  

### 5. Analytics & BI
**Status:** 🚧 Não implementado (Módulo Futuro)  
**Descrição:** Visualize métricas de performance, taxas de resposta e dashboards analíticos em tempo real.  

---

## 🚀 Como Buildar e Executar o Projeto

Recomenda-se utilizar o `nvm` para gestão da versão do **Node.js**.

### Inicialização e Instalação

Na raiz do repositório, instale todas as dependências ignorando temporariamente conflitos de peer-dependencies conhecidos usando:

```bash
npm install --legacy-peer-deps
```

*(Se precisar recomeçar e apagar todos os `node_modules` e `package-lock.json`, você pode rodar os comandos abaixo)*
- **PowerShell:** `Get-ChildItem -Path "." -Include "node_modules" -Recurse | Remove-Item -Recurse -Force; Remove-Item package-lock.json -Force`
- **CMD:** `for /d /r . %d in (node_modules) do @if exist "%d" rd /s /q "%d"`

### Gerando Build (Produção)

Para efetuar o build de toda a aplicação (Shell + todos os MFEs + pacotes internos), basta executar na raiz:

```bash
npm run build
```

### Execução Local (Desenvolvimento)

A execução utiliza o `concurrently` juntamente com o `turbo` para garantir que as variáveis de ambiente necessárias estejam presentes, subir o servidor mock (Mock DB - JSON Server) e inicializar as aplicações.

**Cenário 1: Executar o projeto inteiro simultaneamente**  
Inicia o backend (json-server porta 4000) e **todos** os micro frontends mapeados (incluindo o Shell):

```bash
npm run dev
```

**Cenário 2: Executar capacidades individualmente (Desenvolvimento Isolado)**  
Se desejar trabalhar apemas em uma tela específica ou app para poupar recursos ou analisar com mais clareza, os comandos abaixo sobem o Mock Backend e apenas a aplicação desejada:

- **Apenas o Shell (Hub Principal da plataforma):**
  ```bash
  npm run dev:shell
  ```
- **Apenas o MFE de Questões (Question):**
  ```bash
  npm run dev:question
  ```
- **Apenas o MFE de Questionários (Questionnaire):**
  ```bash
  npm run dev:questionnaire
  ```
- **Apenas o MFE do Designer de Fluxo (Order Questionnaire):**
  ```bash
  npm run dev:orderquestionnaire
  ```
