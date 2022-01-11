// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
    client: {
      jasmine: {},
      clearContext: false,
    },
    jasmineHtmlReporter: {
      suppressAll: true,
    },
    coverageReporter: {
      reporters: [
        { type: 'lcovonly', subdir: '.' },
        { type: 'html', subdir: '.' },
        { type: 'text-summary', subdir: '.' },
      ],
      dir: require('path').join(__dirname, 'dist/coverage/'),
      check: config.buildWebpack.options.watch
        ? {}
        : {
            emitWarning: false,
            global: {
              statements: 80,
              lines: 80,
              branches: 80,
              functions: 80,
            },
          },
    },
    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--headless',
          '--disable-gpu',
          '--no-sandbox',
          '--remote-debugging-port=9222',
        ],
      },
      ChromeDebugging: {
        base: 'Chrome',
        flags: ['--remote-debugging-port=9333'],
      },
    },
    browsers: ['ChromeHeadless'],
    singleRun: true,
    restartOnFileChange: true,
  });
};
