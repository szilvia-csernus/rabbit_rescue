// https://mswjs.io/docs/integrations/node
// A node server is used to mock the API requests in the tests. 
// The server is set up with the handlers by the setupServer function from msw/node.
// The server is stopped after the tests are finished using the server.close function.

import { setupServer } from 'msw/node'
import { handlers } from './handlers'
 
export const server = setupServer(...handlers)