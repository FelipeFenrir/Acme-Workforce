const API_URL = "http://localhost:4000";
const API_QUESTION_URL = "/api/v1/questions";
const API_QUIZ_URL = "/api/v1/questionnaires";

// Detecta se estamos em ambiente de desenvolvimento
const isDev = typeof window !== 'undefined' && 
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.port !== '');

// Gerador simplificado de UUID v7 para rastreabilidade
const generateUuidV7 = () => {
  const timestamp = Date.now();
  const hex = timestamp.toString(16).padStart(12, '0');
  const ver = '7';
  const random1 = Math.floor(Math.random() * 0x1000).toString(16).padStart(3, '0');
  const var_ = (Math.floor(Math.random() * 4) + 8).toString(16);
  const random2 = Math.floor(Math.random() * 0x1000).toString(16).padStart(3, '0');
  const random3 = Math.floor(Math.random() * 0x1000000000000).toString(16).padStart(12, '0');
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${ver}${random1}-${var_}${random2}-${random3}`;
};

export const dataService = {
  getHeaders: function(flowId) {
    const headers = { 'Content-Type': 'application/json' };
    headers['x-correlation-id'] = generateUuidV7();
    if (flowId) headers['x-flow-id'] = flowId;
    return headers;
  },
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

  apiErrorListeners: [],
  subscribeToApiError: function(listener) {
    this.apiErrorListeners.push(listener);
    return () => {
      this.apiErrorListeners = this.apiErrorListeners.filter(l => l !== listener);
    };
  },
  apiSuccessListeners: [],
  subscribeToApiSuccess: function(listener) {
    this.apiSuccessListeners.push(listener);
    return () => {
      this.apiSuccessListeners = this.apiSuccessListeners.filter(l => l !== listener);
    };
  },
  notifyApiSuccess: function(message) {
    this.apiSuccessListeners.forEach(listener => listener({ message }));
  },
  notifyApiError: async function(res) {
    let message = 'Ocorreu um erro inesperado';
    let detail = '';
    let type = 'SERVER_ERROR';
    let isRealBackendError = false;

    try {
      const errorData = await res.json();
      const body = errorData.body || errorData;
      isRealBackendError = !!(body.title || body.status || body.code);

      if (res.status >= 400 && res.status < 500) {
        type = 'VALIDATION_ERROR';
        message = body.title || 'Falha na validação dos dados';
        if (body.errors && Array.isArray(body.errors)) {
          detail = body.errors.map(e => `${e.field || ''}: ${e.message}`).join(' | ');
        } else {
          detail = body.detail || body.message || '';
        }
      } else {
        type = 'INTERNAL_ERROR';
        message = body.title || 'Erro interno no servidor';
        detail = body.detail || 'Nossa equipe técnica foi notificada. Por favor, tente novamente mais tarde.';
      }
    } catch (e) {
      detail = `Status ${res.status}: ${res.statusText}`;
      isRealBackendError = false; 
    }

    // Silenciamos a notificação redundante (banner vermelho) se o fallback (banner amarelo) for ativado
    if (!isRealBackendError && isDev) {
       return isRealBackendError;
    }

    this.apiErrorListeners.forEach(listener => listener({ 
      status: res.status, 
      message,
      detail,
      type,
      url: res.url
    }));

    return isRealBackendError;
  },

  getPerguntas: async function({ cursor = null, size = 10, filters = {}, sort = null, flowId = null } = {}) {
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

      const res = await fetch(`${API_QUESTION_URL}?${urlParams.toString()}`, {
        headers: this.getHeaders(flowId)
      });
      if (!res.ok) {
        const isReal = await this.notifyApiError(res);
        if (isDev && !isReal) throw new TypeError('OFFLINE');
        throw new Error('Falha na API principal');
      }
      const response = await res.json(); // expected format: { data: [...], meta: { ... } }
      response.data = response.data.map(q => ({ ...q, type: 'perguntaNode' }));
      this.setFallbackActive(false);
      return response;
    } catch (err) {
      if (isDev && err instanceof TypeError) {
        console.warn("Fallback para json-server (db.json) em getPerguntas (Servidor Offline)");
        this.setFallbackActive(true);
        const res = await fetch(`${API_URL}/perguntas`);
        const data = await res.json();
        const mappedData = data.map(q => ({ ...q, type: 'perguntaNode' }));
        return { data: mappedData, meta: { hasNext: false, nextCursor: null } };
      }
      throw err;
    }
  },

  getQuestionarios: async function({ cursor = null, size = 10, filters = {}, sort = null, flowId = null } = {}) {
    try {
      const urlParams = new URLSearchParams();
      urlParams.append('mode', 'CURSOR');
      urlParams.append('size', size);
      if (cursor) urlParams.append('cursor', cursor);

      if (filters.buscaValor) {
        if (filters.buscaTipo === 'ID') urlParams.append('ids', filters.buscaValor);
        else urlParams.append('descriptionContains', filters.buscaValor);
      }
      if (filters.status && filters.status !== 'ALL') urlParams.append('status', filters.status);
      if (filters.channelId) urlParams.append('channelIds', filters.channelId);
      if (filters.journeyId) urlParams.append('journeyIds', filters.journeyId);
      if (sort) urlParams.append('sort', sort);

      const res = await fetch(`${API_QUIZ_URL}?${urlParams.toString()}`, {
        headers: this.getHeaders(flowId)
      });
      if (!res.ok) {
        const isReal = await this.notifyApiError(res);
        if (isDev && !isReal) throw new TypeError('OFFLINE');
        throw new Error('Falha na API principal');
      }
      const response = await res.json();
      response.data = response.data.map(q => ({ ...q, nome: q.description, type: 'quizNode' }));
      this.setFallbackActive(false);
      return response;
    } catch (err) {
      if (isDev && err instanceof TypeError) {
        this.setFallbackActive(true);
        console.warn("Fallback para json-server (db.json) em getQuestionarios (Servidor Offline)");
        const res = await fetch(`${API_URL}/questionarios`);
        const data = await res.json();
        const mappedData = data.map(q => ({ ...q, nome: q.description || q.nome, type: 'quizNode' }));
        return { data: mappedData, meta: { hasNext: false, nextCursor: null } };
      }
      throw err;
    }
  },

  addPergunta: async function(p, flowId = null) {
    try {
      const res = await fetch(API_QUESTION_URL, {
        method: 'POST',
        headers: this.getHeaders(flowId),
        body: JSON.stringify(p)
      });
      if (!res.ok) {
        const isReal = await this.notifyApiError(res);
        if (isDev && !isReal) throw new TypeError('OFFLINE');
        return;
      }
      this.notifyApiSuccess('Questão adicionada com sucesso!');
      return await res.json();
    } catch (err) {
      if (isDev && err instanceof TypeError) {
        this.setFallbackActive(true);
        console.warn("Fallback para json-server em addPergunta (Servidor Offline)");
        const res = await fetch(`${API_URL}/perguntas`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(p)
        });
        return { data: await res.json() };
      }
      throw err;
    }
  },

  deletePergunta: async function(id, flowId = null) {
    try {
      const res = await fetch(`${API_QUESTION_URL}/${id}`, { 
        method: 'DELETE',
        headers: this.getHeaders(flowId)
      });
      if (!res.ok) {
        const isReal = await this.notifyApiError(res);
        if (isDev && !isReal) throw new TypeError('OFFLINE');
        return;
      }
      this.notifyApiSuccess('Questão removida com sucesso!');
      return await res.json();
    } catch (err) {
      if (isDev && err instanceof TypeError) {
        this.setFallbackActive(true);
        console.warn("Fallback para json-server em deletePergunta (Servidor Offline)");
        const res = await fetch(`${API_URL}/perguntas/${id}`, { method: 'DELETE' });
        return { data: { id, deleted: true } };
      }
      throw err;
    }
  },

  updatePergunta: async function(id, dados, flowId = null) {
    try {
      const res = await fetch(`${API_QUESTION_URL}/${id}`, {
        method: 'PUT',
        headers: this.getHeaders(flowId),
        body: JSON.stringify(dados)
      });
      if (!res.ok) {
        const isReal = await this.notifyApiError(res);
        if (isDev && !isReal) throw new TypeError('OFFLINE');
        return;
      }
      this.notifyApiSuccess('Questão atualizada com sucesso!');
      return await res.json();
    } catch (err) {
      if (isDev && err instanceof TypeError) {
        this.setFallbackActive(true);
        console.warn("Fallback para json-server em updatePergunta (Servidor Offline)");
        const res = await fetch(`${API_URL}/perguntas/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dados)
        });
        return { data: await res.json() };
      }
      throw err;
    }
  },

  addQuiz: async function(q, flowId = null) {
    try {
      const payload = {
        id: q.id,
        description: q.nome,
        channelId: q.channel || q.channelDistributionId,
        journeyId: q.journey || q.journeyDistributionId,
        channelDistributionId: q.channel || q.channelDistributionId,
        journeyDistributionId: q.journey || q.journeyDistributionId,
        createdBy: q.createdBy || {
          id: "019dff07-5f02-70d4-8680-f8dc34fd5fb9",
          referenceCode: "sys-admin",
          name: "Administrador",
          email: "admin@acme.com"
        }
      };
      const res = await fetch(API_QUIZ_URL, {
        method: 'POST',
        headers: this.getHeaders(flowId),
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        const isReal = await this.notifyApiError(res);
        if (isDev && !isReal) throw new TypeError('OFFLINE');
        return;
      }
      this.notifyApiSuccess('Questionário criado com sucesso!');
      this.setFallbackActive(false);
      const response = await res.json();
      const data = response.data || response;
      return { ...data, nome: data.description, type: 'quizNode' };
    } catch (err) {
      if (isDev && err instanceof TypeError) {
        this.setFallbackActive(true);
        console.warn("Fallback para json-server em addQuiz (Servidor Offline)");
        const res = await fetch(`${API_URL}/questionarios`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const data = await res.json();
        return { ...data, nome: data.description || data.nome, type: 'quizNode' };
      }
      throw err;
    }
  },

  getQuestionarioById: async function(id, channelId, journeyId, flowId = null) {
    try {
      const urlParams = new URLSearchParams();
      if (channelId) urlParams.append('channelId', channelId);
      if (journeyId) urlParams.append('journeyId', journeyId);

      const res = await fetch(`${API_QUIZ_URL}/${id}?${urlParams.toString()}`, {
        headers: this.getHeaders(flowId)
      });
      if (!res.ok) {
        const isReal = await this.notifyApiError(res);
        if (isDev && !isReal) throw new TypeError('OFFLINE');
        return;
      }
      const response = await res.json();
      const data = response.data || response;
      return { ...data, nome: data.description, type: 'quizNode' };
    } catch (err) {
      if (isDev && err instanceof TypeError) {
        this.setFallbackActive(true);
        const res = await fetch(`${API_URL}/questionarios/${id}`);
        if (!res.ok) throw new Error('Not found in fallback');
        const data = await res.json();
        return { ...data, nome: data.description || data.nome, type: 'quizNode' };
      }
      throw err;
    }
  },

  updateQuiz: async function(id, q, channelId, journeyId, flowId = null) {
    try {
      const urlParams = new URLSearchParams();
      if (channelId) urlParams.append('channelId', channelId);
      if (journeyId) urlParams.append('journeyId', journeyId);

      const payload = {
        description: q.nome,
        status: q.status || 'ACTIVE',
        channelId: channelId,
        journeyId: journeyId,
        channelDistributionId: channelId,
        journeyDistributionId: journeyId,
        questionsToUpsert: q.questionsToUpsert || [],
        questionIdsToRemove: q.questionIdsToRemove || [],
        updatedBy: q.updatedBy || {
          id: "019dff07-5f02-70d4-8680-f8dc34fd5fb9",
          referenceCode: "sys-admin",
          name: "Administrador",
          email: "admin@acme.com"
        }
      };
      const res = await fetch(`${API_QUIZ_URL}/${id}?${urlParams.toString()}`, {
        method: 'PUT',
        headers: this.getHeaders(flowId),
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        const isReal = await this.notifyApiError(res);
        if (isDev && !isReal) throw new TypeError('OFFLINE');
        return;
      }
      this.notifyApiSuccess('Designer sincronizado com sucesso!');
      this.setFallbackActive(false);
      const response = await res.json();
      const data = response.data || response;
      return { ...data, nome: data.description, type: 'quizNode' };
    } catch (err) {
      if (isDev && err instanceof TypeError) {
        this.setFallbackActive(true);
        // No update, o fallback apenas sinaliza mas não persiste o estado complexo no json-server (Offline)
        return { nome: q.nome, status: q.status };
      }
      throw err;
    }
  },

  deleteQuiz: async function(id, channelId, journeyId, flowId = null) {
    try {
      const urlParams = new URLSearchParams();
      if (channelId) urlParams.append('channelId', channelId);
      if (journeyId) urlParams.append('journeyId', journeyId);

      const res = await fetch(`${API_QUIZ_URL}/${id}?${urlParams.toString()}`, {
        method: 'DELETE',
        headers: this.getHeaders(flowId)
      });
      if (!res.ok) {
        await this.notifyApiError(res);
        return;
      }
      this.notifyApiSuccess('Questionário removido com sucesso!');
      this.setFallbackActive(false);
      return res.json();
    } catch (err) {
      if (isDev && err instanceof TypeError) {
        this.setFallbackActive(true);
        const res = await fetch(`${API_URL}/questionarios/${id}`, { method: 'DELETE' });
        return res.json();
      }
      throw err;
    }
  },

  // VÍNCULOS E INTEGRIDADE (Legado para Fallback)
  isItemVinculado: async (id, type) => {
    try {
      const res = await fetch(`${API_URL}/questionarios`);
      if (!res.ok) return false;
      const todosQuizes = await res.json();
      
      return todosQuizes.some(q => {
        if (type === 'quizNode') return q.id === id;
        if (type === 'perguntaNode') return q.configuredQuestions?.some(cq => cq.questionId === id);
        return false;
      });
    } catch (e) { return false; }
  }
};
