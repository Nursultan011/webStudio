module.exports = {
  // options...
  devServer: {
    proxy: 'http://185.22.67.19/',
  },

  pluginOptions: {
    i18n: {
      locale: 'yes',
      fallbackLocale: 'yes',
      localeDir: 'yes',
      enableInSFC: true,
      enableBridge: false
    }
  }
}
