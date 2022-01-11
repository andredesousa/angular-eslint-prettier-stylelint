const { SpecReporter, StacktraceOption } = require('jasmine-spec-reporter');
const HtmlReporter = require('protractor-beautiful-reporter');

/**
 * Protractor configuration file, see link for more information
 * https://github.com/angular/protractor/blob/master/lib/config.ts
 *
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [
        '--headless',
        '--disable-gpu',
        '--window-size=1920,1080',
        '--no-sandbox',
        '--disable-extensions',
        '--disable-dev-shm-usage',
      ],
    },
    maxInstances: 4,
    shardTestFiles: true,
  },
  specs: ['./src/**/*.spec.ts'],
  directConnect: true,
  SELENIUM_PROMISE_MANAGER: false,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () {},
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json'),
    });
    jasmine.getEnv().addReporter(
      new SpecReporter({
        spec: {
          displayStacktrace: StacktraceOption.PRETTY,
        },
      }),
    );
    jasmine.getEnv().addReporter(
      new HtmlReporter({
        baseDirectory: 'dist/e2e',
        docName: 'index.html',
        takeScreenShotsOnlyForFailedSpecs: true,
      }).getJasmine2Reporter(),
    );
  },
};
