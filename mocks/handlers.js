import { http, HttpResponse } from 'msw';

export const handlers = [
  // Mock para buscar uma pergunta por ID
  http.get('http://localhost:9005/api/v1/questions/:id', ({ params }) => {
    return HttpResponse.json({
      id: params.id,
      label: 'Pergunta Mockada',
      status: 'ACTIVE',
      config: {
        order: 1,
        answerConfig: { type: 'TEXT', attributes: {} }
      }
    });
  }),

  // Mock para listar perguntas
  http.get('http://localhost:9005/api/v1/questions', () => {
    return HttpResponse.json([
      { id: '1', label: 'Pergunta 1', status: 'ACTIVE' },
      { id: '2', label: 'Pergunta 2', status: 'DRAFT' }
    ]);
  }),

  // Mock para salvar/atualizar
  http.put('http://localhost:9005/api/v1/questions/:id', async ({ request }) => {
    const updatedData = await request.json();
    return HttpResponse.json(updatedData);
  }),
];
