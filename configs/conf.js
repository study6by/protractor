exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../tests/angular-spec.js'],
  framework: 'mocha',
  mochaOpts: {
    timeout: 20000,
    reporter: 'mochawesome',
    reporterOptions: {
      html: true,
      json: false,
      quiet: true
    }
  },
  capabilities: {
    browserName: 'firefox'
  },
  onPrepare: function () {
    // require("babel-register");
    browser.driver.manage().window().maximize()
    require('babel-core/register')
    require('babel-polyfill')
  }
}
