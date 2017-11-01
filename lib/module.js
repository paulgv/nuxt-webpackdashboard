var DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = function (moduleOptions) {
  // Only run in dev
  if (!this.options.dev) {
    return
  }
  this.extendBuild((config, { isServer }) => {
    // Ignore SSR bundle
    if (isServer) {
      return
    }
    const options = Object.assign({}, this.options.webpackDashboard, moduleOptions)
    config.plugins.push(new DashboardPlugin(options))
  })
}
