/**
 * Pure functions for Question and Questionnaire logic.
 * Part of the Hexagonal Architecture Domain Layer.
 */

/**
 * Updates an object at a specific path with a value.
 * @param {Object} obj - The object to update.
 * @param {string} path - The dot-separated path (e.g., 'answerConfig.type').
 * @param {any} value - The new value.
 * @returns {Object} A new object with the updated value.
 */
export const setValueByPath = (obj, path, value) => {
  const newData = JSON.parse(JSON.stringify(obj));
  const parts = path.split('.');
  let current = newData;

  for (let i = 0; i < parts.length - 1; i++) {
    if (!current[parts[i]]) current[parts[i]] = {};
    current = current[parts[i]];
  }

  current[parts[parts.length - 1]] = value;
  return newData;
};

/**
 * Specifically handles question configuration updates with side effects.
 * @param {Object} config - The current config.
 * @param {string} path - The path to update.
 * @param {any} value - The new value.
 * @returns {Object} The updated config.
 */
export const updateQuestionConfig = (config, path, value) => {
  let newConfig = JSON.parse(JSON.stringify(config));
  const parts = path.split('.');
  let current = newConfig;

  for (let i = 0; i < parts.length - 1; i++) {
    if (!current[parts[i]]) current[parts[i]] = {};
    current = current[parts[i]];
  }

  const field = parts[parts.length - 1];

  // Business Logic: Special handling for 'type' changes
  if (field === 'type') {
    if (path.includes('Condition')) {
      if (value === 'COMPOSITE') {
        current.attributes = { operator: 'AND' };
        current.children = current.children || [];
      } else {
        current.attributes = { 
          questionRootCode: '', 
          expectedValue: '', 
          ...(value === 'NUMERIC' ? { operator: 'GREATER_THAN' } : {}) 
        };
        delete current.children;
      }
    } else if (path === 'answerConfig.type' && value === 'OPTION_LIST') {
      if (!current.attributes) current.attributes = {};
      if (!current.attributes.answerOptions) current.attributes.answerOptions = [];
    }
  }

  current[field] = value;
  return newConfig;
};
