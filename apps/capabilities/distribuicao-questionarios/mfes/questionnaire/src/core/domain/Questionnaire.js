/**
 * Questionnaire Entity and Domain Logic
 */

export const createQuestionnaire = (data) => ({
  id: data.id || '',
  nome: data.nome || '',
  status: data.status || 'DRAFT',
  questions: data.questions || []
});

export const calculateProgress = (questionnaire) => {
  if (!questionnaire.questions.length) return 0;
  // Exemplo de lógica de negócio: progresso baseado em perguntas respondidas
  // (Aqui apenas um exemplo estático)
  return 50; 
};
