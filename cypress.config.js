const { defineConfig } = require("cypress");

module.exports = defineConfig({


  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },

    specPattern: "cypress/integration/*.js",

    env: {
      url: "https://parabank.parasoft.com/"
    },
  },



  defaultCommandTimeout: 6000,

  retries: {
   runMode: 1,
 }

});
