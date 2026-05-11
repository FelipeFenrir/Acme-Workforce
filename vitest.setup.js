import '@testing-library/jest-dom';
import { expect, afterEach, beforeAll, afterAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import { server } from './mocks/server';

// Estabelece a interceptação da API antes de todos os testes
beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));

// Limpa os handlers após cada teste (importante para testes que usam server.use)
afterEach(() => {
  cleanup();
  server.resetHandlers();
});

// Fecha o servidor após todos os testes
afterAll(() => server.close());
