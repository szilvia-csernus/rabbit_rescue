import { defineConfig } from "cypress";
import vitePreprocessor from 'cypress-vite'

export default defineConfig({
  projectId: 'rd7g75',
  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on) {
      on('file:preprocessor', vitePreprocessor())
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
  // needed for Stripe page test - otherwise, Stripe can't be rendered in an iFrame
  chromeWebSecurity: false,
  numTestsKeptInMemory: 1, // Limit the number of tests kept in memory to prevent parallel database access issues
});
