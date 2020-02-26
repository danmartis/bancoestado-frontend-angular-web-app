// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
const currentBrowser = process.env.KARMA_BROWSER || 'HeadlessChrome';
console.log('Karma configured to use: ' + currentBrowser);
if(currentBrowser === 'HeadlessChrome'){
  process.env.CHROME_BIN = require('puppeteer').executablePath();
}


module.exports = function (config) {
  config.set({
    basePath: '',
    browserNoActivityTimeout: 30000,
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
    //  require('karma-nyan-reporter')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true,
    },
    // reporters: ['progress', 'kjhtml', 'nyan'],
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [currentBrowser],
    customLaunchers:{
      
      HeadlessChrome:{
          base: 'ChromeHeadless',
          flags: ['--no-sandbox']
      },
      ChromeDebug: {
          base: 'Chrome',
          flags: ['--remote-debugging-port=9333', '--disable-web-security' ]
      }
    },
    browserConsoleLogOptions: {level: "info", format: "%b %T: %m", terminal: true},
    singleRun: false
  });
};
