import { describe, it, expect } from 'vitest';
import { updateNodeConfig } from './updateNodeConfig';

describe('BDD: Update Node Configuration', () => {
  
  describe('Scenario: Updating Quiz Name', () => {
    it('Given a quiz node, When I update the "nome" path, Then the name should be updated in the data object', () => {
      const node = {
        type: 'quizNode',
        data: { nome: 'Old Name', id: '123' }
      };
      
      const newData = updateNodeConfig(node, 'nome', 'New Name');
      
      expect(newData.nome).toBe('New Name');
      expect(newData.id).toBe('123'); // Should preserve other fields
    });
  });

  describe('Scenario: Changing Question Strategy to OPTION_LIST', () => {
    it('Given a question node with TEXT strategy, When I change answerConfig.type to OPTION_LIST, Then answerOptions should be initialized', () => {
      const node = {
        type: 'perguntaNode',
        data: { 
          config: { 
            answerConfig: { type: 'TEXT', attributes: {} } 
          } 
        }
      };
      
      const newData = updateNodeConfig(node, 'answerConfig.type', 'OPTION_LIST');
      
      expect(newData.config.answerConfig.type).toBe('OPTION_LIST');
      expect(newData.config.answerConfig.attributes.answerOptions).toBeDefined();
      expect(Array.isArray(newData.config.answerConfig.attributes.answerOptions)).toBe(true);
    });
  });

  describe('Scenario: Changing Condition to COMPOSITE', () => {
    it('Given a question with an EQUAL condition, When I change its type to COMPOSITE, Then it should initialize with AND operator and empty children', () => {
      const node = {
        type: 'perguntaNode',
        data: { 
          config: { 
            rootCondition: { type: 'EQUAL', attributes: { questionRootCode: 'P1', expectedValue: '1' } } 
          } 
        }
      };
      
      const newData = updateNodeConfig(node, 'rootCondition.type', 'COMPOSITE');
      
      expect(newData.config.rootCondition.type).toBe('COMPOSITE');
      expect(newData.config.rootCondition.attributes.operator).toBe('AND');
      expect(newData.config.rootCondition.children).toEqual([]);
    });
  });

});
