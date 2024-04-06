// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';


// https://mswjs.io/docs/integrations/node
// A node server is used to mock the API requests in the tests.

import { beforeAll, afterEach, afterAll } from 'vitest'
import { server } from './src/mocks/node'
 
// Enable API mocking before tests.
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests
// so they don't affect subsequent tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())
