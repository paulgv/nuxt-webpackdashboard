var DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = function (moduleOptions) {
  this.extendBuild((config, { isServer }) => {
    // Ignore SSR bundle
    if (isServer) {
      return
    }
    const options = Object.assign({}, this.options.webpackDashboard, moduleOptions)
    config.plugins.push(new DashboardPlugin(options))
  })
}
