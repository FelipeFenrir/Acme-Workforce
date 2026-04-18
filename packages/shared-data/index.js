const API_URL = "http://localhost:4000";

export const dataService = {

  getPerguntas: async () => {
    const res = await fetch(`${API_URL}/perguntas`);
    return res.json();
  },

  getQuestionarios: async () => {
    const res = await fetch(`${API_URL}/questionarios`);
    return res.json();
  },

  addPergunta: async (p) => {
    return fetch(`${API_URL}/perguntas`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(p)
    });
  },

  deletePergunta: async (id) => {
    return fetch(`${API_URL}/perguntas/${id}`, { method: 'DELETE' });
  },

  updatePergunta: async (id, dados) => {
    return fetch(`${API_URL}/perguntas/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados)
    });
  },

  addQuiz: async (quiz) => {
    const res = await fetch(`${API_URL}/questionarios`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(quiz)
    });
    if (!res.ok) throw new Error('Erro ao salvar questionário');
    return res.json();
  },

  deleteQuiz: async (id) => {
    return fetch(`${API_URL}/questionarios/${id}`, { method: 'DELETE' });
  },

  updateQuiz: async (id, dados) => {
    return fetch(`${API_URL}/questionarios/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados)
    });
  },

  // VÍNCULOS E INTEGRIDADE
  isItemVinculado: async (id, type) => {
    const res = await fetch(`${API_URL}/vinculos`);
    const todosVinculos = await res.json();
    
    return todosVinculos.some(v => {
      // 1. Se for QUESTIONÁRIO, verificamos se o quizId do vínculo é o que queremos deletar
      if (type === 'quizNode') {
        return v.quizId === id;
      }

      // 2. Se for PERGUNTA, verificamos se o ID aparece em alguma conexão (source ou target)
      // Note que o ID no designer tem o prefixo 'node_', então usamos includes ou regex
      if (type === 'perguntaNode') {
        return v.connections?.some(conn => 
          conn.source.includes(id) || conn.target.includes(id)
        );
      }

      return false;
    });
  },

  getLayout: async (quizId) => {
    const res = await fetch(`${API_URL}/layout_designer?quizId=${quizId}`);
    return res.json();
  },

  getVinculos: async (quizId) => {
    const res = await fetch(`${API_URL}/vinculos?quizId=${quizId}`);
    return res.json();
  },

  deleteVinculos: async (quizId) => {
    // 1. Busca os IDs internos do json-server para cada tabela
    const [vincRes, layRes] = await Promise.all([
      dataService.getVinculos(quizId),
      dataService.getLayout(quizId)
    ]);

    const promessas = [];

    // Se houver registro na tabela de negócio, deleta
    if (vincRes && vincRes.length > 0) {
      promessas.push(fetch(`${API_URL}/vinculos/${vincRes[0].id}`, { method: 'DELETE' }));
    }

    // Se houver registro na tabela de design, deleta
    if (layRes && layRes.length > 0) {
      promessas.push(fetch(`${API_URL}/layout_designer/${layRes[0].id}`, { method: 'DELETE' }));
    }

    return Promise.all(promessas);
  },

  saveLayout: async (quizId, nodes) => {
    const res = await fetch(`${API_URL}/layout_designer?quizId=${quizId}`);
    const existing = await res.json();
    const existe = existing.length > 0;
    
    const method = existe ? 'PUT' : 'POST';
    const url = existe ? `${API_URL}/layout_designer/${existing[0].id}` : `${API_URL}/layout_designer`;
    
    const layoutData = nodes.map(n => ({ id: n.id, position: n.position }));
    return fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quizId, nodes: layoutData })
    });
  },

  saveVinculos: async (quizId, nodes, edges) => {
    const res = await fetch(`${API_URL}/vinculos?quizId=${quizId}`);
    const existing = await res.json();
    const existe = existing.length > 0;

    const method = existe ? 'PUT' : 'POST';
    const url = existe ? `${API_URL}/vinculos/${existing[0].id}` : `${API_URL}/vinculos`;

    // REGRA DE NEGÓCIO PURA: Apenas as conexões entre IDs
    const businessData = edges.map(e => ({ source: e.source, target: e.target }));
    
    // Opcional: Você pode salvar aqui também a lista de IDs dos nós presentes 
    // para facilitar a função isItemVinculado sem precisar de includes
    const nodeIds = nodes.map(n => n.data.id);

    return fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quizId, connections: businessData, nodeIds })
    });
  }
};
