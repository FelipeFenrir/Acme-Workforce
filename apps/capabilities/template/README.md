# Template de Capability

Template para criar novas capabilities no ACME Workforce.

## Estrutura

```
apps/capabilities/
├── template/                    # Template para copiar
│   ├── src/
│   │   ├── App.jsx              # Componente principal
│   │   ├── main.jsx            # Entry point
│   │   └── components/
│   │       ├── menu-lateral/   # Menu lateral
│   │       └── menu-superior/   # Menu superior
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── minha-capability/            # Sua nova capability
    └── mfes/                   # MFEs específicos da capability
        ├── mfe-1/
        └── mfe-2/
```

## Como criar uma nova Capability

### 1. Copie o template

```bash
cp -r apps/capabilities/template apps/capabilities/minha-capability
```

### 2. Edite o `package.json`

```json
{
  "name": "capability-minha-capability"
}
```

### 3. Edite o `src/App.jsx`

Atualize o array `MFES` e as constantes:

```jsx
const MFES = [
  {
    id: 'meu-mfe-1',
    url: import.meta.env.VITE_URL_MINHA_CAPABILITY_MFE1 || "http://localhost:9201",
    label: "Meu MFE 1",
    icon: <HelpCircle size={20} />
  }
];

export const CAPABILITY_ID = 'minha-capability';
export const CAPABILITY_TITLE = 'Minha Nova Capability';
```

### 4. Adicione no `.env` da raiz

```env
VITE_PORT_CAPABILITY_MINHA_CAPABILITY=9098
VITE_URL_CAPABILITY_MINHA_CAPABILITY=http://localhost:9098
VITE_URL_MINHA_CAPABILITY_MFE1=http://localhost:9201
```

### 5. Adicione no Shell (`apps/shell/src/App.jsx`)

```jsx
{
  id: 'minhaCapability',
  titulo: 'Minha Nova Capability',
  descricao: 'Descrição...',
  icon: <MeuIcone size={32} />,
  mfes: [
    {
      id: 'minha-capability',
      url: import.meta.env.VITE_URL_CAPABILITY_MINHA_CAPABILITY,
      label: "Minha Capability",
      icon: <MeuIcone size={20} />
    }
  ]
}
```

### 6. Execute

```bash
npm install
npm run dev:shell
```

## Estrutura Atual do Projeto

```
apps/
├── capabilities/
│   ├── template/                             # Template
│   └── distribuicao-questionarios/           # Capability implementada
│       ├── src/
│       │   ├── App.jsx                        # Capability App (menu + iframe)
│       │   └── components/
│       │       ├── menu-lateral/
│       │       └── menu-superior/
│       └── mfes/                             # MFEs internos
│           ├── question/
│           ├── questionnaire/
│           └── orderquestionnaire/
├── shell/                                    # Host (apenas cards + iframe da capability)
└── ...
```

## Comunicação Shell ↔ Capability

- **Capability → Shell**: `window.parent.postMessage({ type: 'VOLTAR_HUB' }, '*')`
- **Shell → Capability**: O Shell escuta mensagens via `window.addEventListener('message', handler)`
