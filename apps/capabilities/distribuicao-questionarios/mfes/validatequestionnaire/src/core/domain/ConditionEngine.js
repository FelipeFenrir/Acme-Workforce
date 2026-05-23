const OPERATOR_MAP = {
  NOT_EQUAL: 'NOT_EQUALS',
  GREATER_THAN_OR_EQUAL: 'GREATER_OR_EQUALS',
  LESS_THAN_OR_EQUAL: 'LESS_OR_EQUALS',
};

export const normalizeCondition = (condition) => {
  if (!condition) return condition;

  if (condition.type === 'EQUAL') {
    return {
      ...condition,
      type: 'SIMPLE',
      attributes: {
        ...condition.attributes,
        operator: 'EQUALS',
      },
    };
  }

  if (condition.type === 'NUMERIC') {
    return {
      ...condition,
      type: 'SIMPLE',
      attributes: {
        ...condition.attributes,
        operator: OPERATOR_MAP[condition.attributes?.operator] || condition.attributes?.operator || 'EQUALS',
      },
    };
  }

  return condition;
};

export const evaluateCondition = (rawCondition, answers = {}) => {
  const condition = normalizeCondition(rawCondition);
  if (!condition) return { result: true, visible: true };

  if (condition.type === 'SIMPLE') {
    const { questionRootCode, operator, expectedValue } = condition.attributes || {};
    const answer = answers[questionRootCode];

    if (answer === undefined || answer === null || answer === '') {
      return { result: false, visible: true };
    }

    let isValid = false;
    const answerStr = String(answer).trim();
    const expectedStr = String(expectedValue || '').trim();

    switch (operator) {
      case 'EQUALS':
        isValid = answerStr === expectedStr;
        break;
      case 'NOT_EQUALS':
        isValid = answerStr !== expectedStr;
        break;
      case 'CONTAINS':
        isValid = answerStr.toLowerCase().includes(expectedStr.toLowerCase());
        break;
      case 'NOT_CONTAINS':
        isValid = !answerStr.toLowerCase().includes(expectedStr.toLowerCase());
        break;
      case 'GREATER_THAN':
        isValid = parseFloat(answerStr) > parseFloat(expectedStr);
        break;
      case 'LESS_THAN':
        isValid = parseFloat(answerStr) < parseFloat(expectedStr);
        break;
      case 'GREATER_OR_EQUALS':
        isValid = parseFloat(answerStr) >= parseFloat(expectedStr);
        break;
      case 'LESS_OR_EQUALS':
        isValid = parseFloat(answerStr) <= parseFloat(expectedStr);
        break;
      case 'IS_EMPTY':
        isValid = answerStr === '';
        break;
      case 'IS_NOT_EMPTY':
        isValid = answerStr !== '';
        break;
      case 'REGEX':
        try {
          const regex = new RegExp(expectedStr);
          isValid = regex.test(answerStr);
        } catch {
          isValid = false;
        }
        break;
      default:
        isValid = true;
    }

    return { result: isValid, visible: true };
  }

  if (condition.type === 'COMPOSITE') {
    const { operator = 'AND' } = condition.attributes || {};
    const children = condition.children || [];

    const childResults = children.map(child => evaluateCondition(child, answers));
    const allResults = childResults.map(r => r.result);

    const compositeResult = operator === 'AND'
      ? allResults.every(Boolean)
      : allResults.some(Boolean);

    return { result: compositeResult, visible: true };
  }

  return { result: true, visible: true };
};

export const validateAnswer = (question, answer, answerConfig) => {
  const errors = [];
  
  if (!answerConfig || !answerConfig.attributes) {
    return errors;
  }

  const attrs = answerConfig.attributes;

  if (attrs.required && (!answer || (typeof answer === 'string' && answer.trim() === ''))) {
    errors.push('Campo obrigatório');
    return errors;
  }

  const answerStr = String(answer || '').trim();

  if (attrs.minLength && answerStr.length < attrs.minLength) {
    errors.push(`Mínimo de ${attrs.minLength} caracteres`);
  }

  if (attrs.maxLength && answerStr.length > attrs.maxLength) {
    errors.push(`Máximo de ${attrs.maxLength} caracteres`);
  }

  if (attrs.pattern && answerStr) {
    try {
      const regex = new RegExp(attrs.pattern);
      if (!regex.test(answerStr)) {
        errors.push(attrs.patternMessage || 'Formato inválido');
      }
    } catch {
    }
  }

  if (attrs.minValue && !isNaN(parseFloat(answerStr))) {
    if (parseFloat(answerStr) < attrs.minValue) {
      errors.push(`Valor mínimo: ${attrs.minValue}`);
    }
  }

  if (attrs.maxValue && !isNaN(parseFloat(answerStr))) {
    if (parseFloat(answerStr) > attrs.maxValue) {
      errors.push(`Valor máximo: ${attrs.maxValue}`);
    }
  }

  if (answerConfig.type === 'OPTION_LIST' && attrs.answerOptions && attrs.answerOptions.length > 0) {
    const validOptions = attrs.answerOptions.map(o => o.value);
    if (!validOptions.includes(answer)) {
      errors.push('Selecione uma opção válida');
    }
  }

  return errors;
};

export const computeVisibility = (questions, answers) => {
  return questions.map(question => {
    const condition = question.rootCondition;
    const id = question.questionId || question.id;
    if (!condition) return { id, visible: true };

    const { result } = evaluateCondition(condition, answers);
    return { id, visible: result };
  });
};

export const buildValidatePayload = (quiz, answers) => {
  return {
    questionnaireId: quiz.id,
    channelDistributionId: quiz.channelDistributionId,
    journeyDistributionId: quiz.journeyDistributionId,
    answers: { ...answers }
  };
};

export const parseValidationResponse = (response) => {
  const data = response.data || response;
  const valid = data.valid !== undefined ? data.valid : true;
  const violations = data.violationsByQuestionId || {};
  
  const errors = Object.entries(violations).map(([questionId, violation]) => ({
    questionId: violation.questionId || questionId,
    questionLabel: violation.questionLabel || '',
    providedAnswer: violation.providedAnswer,
    violations: violation.violations || []
  }));

  return {
    valid,
    message: valid 
      ? 'Todas as respostas foram validadas com sucesso.' 
      : `${errors.length} pergunta(s) com problema(s) encontrado(s).`,
    errors
  };
};