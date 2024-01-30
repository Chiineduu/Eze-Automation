const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'cjdkm1',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      mailslurpApiKey: "10c64528a679ff0d1164f5fdae5939b1090cdb97775d48664e0d977955b48933",
    },
  },
});

