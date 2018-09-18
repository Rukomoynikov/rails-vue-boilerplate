const vue = require('./config/webpack/loaders/vue.js')

module.exports = function(config) {
  config.set({
    basePath: 'app/javascript/',

    browsers: ['PhantomJS'],

    files: [
      { pattern: 'test/*.spec.js', watched: false },
      { pattern: 'test/**/*.spec.js', watched: false }
    ],

    frameworks: ['jasmine'],

    preprocessors: {
      'test/*.spec.js': ['webpack'],
      'test/**/*.spec.js': ['webpack'],
    },

    webpack: {
      module: {
        loaders: [
          { test: /\.js/, exclude: /node_modules/, loader: 'babel-loader' },
          vue
        ]
      },
      watch: true
    },

    webpackServer: {
      noInfo: true
    }
  })
}
