import { describe, it, expect } from 'vitest';

describe('Integration: Question API', () => {
  
  it('should fetch a question from the mocked API', async () => {
    const response = await fetch('http://localhost:9005/api/v1/questions/123');
    const data = await response.json();
    
    expect(response.status).toBe(200);
    expect(data.id).toBe('123');
    expect(data.label).toBe('Pergunta Mockada');
    expect(data.status).toBe('ACTIVE');
  });

  it('should list questions from the mocked API', async () => {
    const response = await fetch('http://localhost:9005/api/v1/questions');
    const data = await response.json();
    
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);
    expect(data[0].label).toBe('Pergunta 1');
  });

});
