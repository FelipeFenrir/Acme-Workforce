/**
 * Identificadores de Fluxo de Negócio (Flow IDs)
 * Utilizados nos headers x-flow-id para rastreabilidade no backend.
 */
export const DESIGNER_FLOWS = {
  LOAD_DESIGN: 'load_questionnaire_design', // Carregamento do fluxo completo no canvas (Designer)
  SYNC_DESIGN: 'sync_questionnaire_design', // Sincronização (Upsert) de perguntas e condições no grafo
  LIST_QUESTIONS: 'designer_fetch_base_questions', // Busca de perguntas base para o catálogo do designer
};
