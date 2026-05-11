/**
 * Question Entity and Domain Logic
 */

export const createQuestion = (data) => ({
  id: data.id || '',
  label: data.label || '',
  status: data.status || 'DRAFT',
  config: data.config || {
    order: 0,
    answerConfig: { type: 'TEXT', attributes: {} }
  }
});

export const validateQuestion = (question) => {
  if (!question.label) return 'Label is required';
  return null;
};
