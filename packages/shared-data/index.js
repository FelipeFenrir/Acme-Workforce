const API_URL = "http://localhost:4000";
const API_QUESTION_URL = "/api/v1/questions";

export const dataService = {
  isFallbackActive: false,
  fallbackListeners: [],
  setFallbackActive: function(isActive) {
    if (this.isFallbackActive !== isActive) {
      this.isFallbackActive = isActive;
      this.fallbackListeners.forEach(listener => listener(isActive));
    }
  },
  subscribeToFallback: function(listener) {
    this.fallbackListeners.push(listener);
    listener(this.isFallbackActive);
    return () => {
      this.fallbackListeners = this.fallbackListeners.filter(l => l !== listener);
    };
  },

  getPerguntas: async function({ cursor = null, size = 10, filters = {}, sort = null } = {}) {
    try {
      const urlParams = new URLSearchParams();
      urlParams.append('mode', 'CURSOR');
      urlParams.append('size', size);
      if (cursor) urlParams.append('cursor', cursor);

      if (filters.buscaValor) {
        if (filters.buscaTipo === 'ID') urlParams.append('ids', filters.buscaValor);
        else urlParams.append('labelContains', filters.buscaValor);
      }
      if (filters.status && filters.status !== 'ALL') urlParams.append('status', filters.status);
      if (sort) urlParams.append('sort', sort);

      const res = await fetch(`${API_QUESTION_URL}?${urlParams.toString()}`);
      if (!res.ok) throw new Error('Falha na API principal');
      const response = await res.json(); // expected format: { data: [...], meta: { ... } }
      response.data = response.data.map(q => ({ ...q, type: 'perguntaNode' }));
      this.setFallbackActive(false);
      return response;
    } catch (err) {
      console.warn("Fallback para json-server (db.json) em getPerguntas");
      this.setFallbackActive(true);
      const res = await fetch(`${API_URL}/perguntas`);
      const data = await res.json();
      const mappedData = data.map(q => ({ ...q, type: 'perguntaNode' }));
      return { data: mappedData, meta: { hasNext: false, nextCursor: null } };
    }
  },

  getQuestionarios: async function() {
    try {
      const res = await fetch(`${API_QUESTION_URL}/questionarios`); // Replace with actual API endpoint if exists, but currently json-server fallback URL is used
      if (!res.ok) throw new Error();
      this.setFallbackActive(false);
      return res.json();
    } catch (err) {
      this.setFallbackActive(true);
      const res = await fetch(`${API_URL}/questionarios`);
      return res.json();
    }
  },

  addPergunta: async (p) => {
    try {
      const res = await fetch(API_QUESTION_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(p)
      });
      if (!res.ok) throw new Error('Falha na API principal');
      return await res.json();
    } catch (err) {
      console.warn("Fallback para json-server em addPergunta");
      const res = await fetch(`${API_URL}/perguntas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(p)
      });
      return { data: await res.json() };
    }
  },

  deletePergunta: async (id) => {
    try {
      const res = await fetch(`${API_QUESTION_URL}/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Falha na API principal');
      return await res.json();
    } catch (err) {
      console.warn("Fallback para json-server em deletePergunta");
      const res = await fetch(`${API_URL}/perguntas/${id}`, { method: 'DELETE' });
      return { data: { id, deleted: true } };
    }
  },

  updatePergunta: async (id, dados) => {
    try {
      const res = await fetch(`${API_QUESTION_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
      });
      if (!res.ok) throw new Error('Falha na API principal');
      return await res.json();
    } catch (err) {
      console.warn("Fallback para json-server em updatePergunta");
      const res = await fetch(`${API_URL}/perguntas/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
      });
      return { data: await res.json() };
    }
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
