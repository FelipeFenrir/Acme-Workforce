/**
 * Identificadores de Fluxo de Negócio (Flow IDs)
 * Utilizados nos headers x-flow-id para rastreabilidade no backend.
 */
export const QUIZ_FLOWS = {
  LIST: 'list_questionnaires', // Listagem e filtros de questionários (jornada/canal)
  CREATE: 'create_questionnaire', // Criação do header de um novo questionário
  UPDATE: 'update_questionnaire', // Atualização de metadados do questionário
  DELETE: 'delete_questionnaire', // Remoção de questionário e seus vínculos
  GET_BY_ID: 'get_questionnaire_detail', // Busca detalhada de um questionário específico
};
