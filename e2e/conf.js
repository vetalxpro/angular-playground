// conf.js
const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost:3000',
  showColors: true,
  specs: [ '*.spec.js' ],
  onPrepare: () => {
    jasmine.getEnv().addReporter(new SpecReporter());
  }
};
