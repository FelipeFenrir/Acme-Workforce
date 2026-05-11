/**
 * Identificadores de Fluxo de Negócio (Flow IDs)
 * Utilizados nos headers x-flow-id para rastreabilidade no backend.
 */
export const QUESTION_FLOWS = {
  LIST: 'list_questions', // Listagem e busca de questões cadastradas
  CREATE: 'create_question', // Criação de uma nova pergunta base
  UPDATE: 'update_question', // Atualização de dados cadastrais de uma pergunta
  DELETE: 'delete_question', // Remoção definitiva de uma pergunta do catálogo
};
