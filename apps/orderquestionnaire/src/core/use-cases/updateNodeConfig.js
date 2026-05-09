import { setValueByPath, updateQuestionConfig } from '../domain/QuestionLogic';

/**
 * Use case to update the configuration of a node (Quiz or Question).
 * 
 * @param {Object} node - The current node from ReactFlow.
 * @param {string} path - The path to the field being updated.
 * @param {any} value - The new value for the field.
 * @returns {Object} The updated data object for the node.
 */
export const updateNodeConfig = (node, path, value) => {
  const isQuiz = node.type === 'quizNode';
  const data = node.data || {};
  
  if (isQuiz) {
    return setValueByPath(data, path, value);
  } else {
    const config = data.config || { 
      order: 0, 
      answerConfig: { type: 'TEXT', attributes: {} }, 
      rootCondition: null 
    };
    const newConfig = updateQuestionConfig(config, path, value);
    return { ...data, config: newConfig };
  }
};
