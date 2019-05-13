const path = require('path')
module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set(
      'mdi',
      path.resolve(__dirname, 'node_modules/vue-material-design-icons')
    )
  }
}
