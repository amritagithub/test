const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  reporter: 'cypress-mochawesome-reporter',
  env :
  {
    url : "https://rahulshettyacademy.com"
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern:'cypress/integration/examples/*.js'
  },
});
