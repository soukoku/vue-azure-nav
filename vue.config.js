const path = require('path')
module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set(
      'mdi',
      path.resolve(__dirname, 'node_modules/vue-material-design-icons')
    )
    const svgRule = config.module.rule('svg')

    // clear all existing loaders.
    // if you don't do this, the loader below will be appended to
    // existing loaders of the rule.
    svgRule.uses.clear()

    // add replacement loader(s)
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')
  }
}
