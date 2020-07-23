module.exports = {
  chainWebpack(config) {
    config.module.rule('eslint')
      .use('eslint-loader')
      .tap((options) => {
        options.formatter = require('eslint-friendly-formatter')
        return options
      })
      .end()

    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: ['./src/common/scss/global.scss']
        })
        .end()
    })
  }
}
