// proxy to joi for option validation
import joi from '@hapi/joi'

const schema = joi.object({
  publicPath: joi.string().allow(''),
  outputDir: joi.string(),
  assetsDir: joi.string().allow(''),
  indexPath: joi.string(),
  filenameHashing: joi.boolean(),
  runtimeCompiler: joi.boolean(),
  transpileDependencies: joi.array(),
  productionSourceMap: joi.boolean(),
  devServer: joi.object(),
  crossorigin: joi.string().valid(...['', 'anonymous', 'use-credentials']),
  integrity: joi.boolean(),

  // css
  css: joi.object({
    // TODO: deprecate this after joi 16 release
    modules: joi.boolean(),
    requireModuleExtension: joi.boolean(),
    extract: joi.alternatives().try(joi.boolean(), joi.object()),
    sourceMap: joi.boolean(),
    loaderOptions: joi.object({
      css: joi.object(),
      sass: joi.object(),
      scss: joi.object(),
      less: joi.object(),
      stylus: joi.object(),
      postcss: joi.object()
    })
  }),

  // webpack
  chainWebpack: joi.func(),
  configureWebpack: joi.alternatives().try(
    joi.object(),
    joi.func()
  ),

  // known runtime options for built-in plugins
  lintOnSave: joi.any().valid(...[true, false, 'error', 'warning', 'default']),
  pwa: joi.object(),

  // 3rd party plugin options
  pluginOptions: joi.object()
})

export default (obj: object) => {
  // joi.validate(obj, schema, {}, (err: object) => {
  //   console.log(err)
  // })
  schema.validate(obj)
}
