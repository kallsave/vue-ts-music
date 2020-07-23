module.exports = {
  chainWebpack(config) {
    config.module.rule('eslint')
    .use('eslint-loader')
    .tap((options) => {
      options.formatter = require('eslint-friendly-formatter')
      return options
    })
  }
}
