const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    FOO: 'bar',
  },
  e2e: {
    baseUrl: 'http://www.automationpractice.pl',
  },
})
