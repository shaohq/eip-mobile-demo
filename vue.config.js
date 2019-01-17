module.exports = {
  lintOnSave: false,

  devServer: {
    host: '0.0.0.0',
    port: 8080
  },
  chainWebpack: config => {
    config.module
      .rule('js')
      .exclude.add(/NIM_Web_.*\.js/).end()
  },

  publicPath: '',
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: {
    extract: false,
    loaderOptions: {
      less: {
        modifyVars: {
          red: '#CD4F39',
          // green: '#339933',
          green: 'teal',
          'text-color': '#303030'
        }
      }
    }
  }
}
