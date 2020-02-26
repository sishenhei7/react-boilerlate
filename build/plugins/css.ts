import miniCssExtractPlugin from 'mini-css-extract-plugin';
import vueStyleLoader from 'vue-style-loader';
import styleLoader from 'style-loader';

const cssnanoOptions = {
  safe: true,
  autoprefixer: { disable: true },
  mergeLonghand: false
}

interface options {
  isProd?: boolean,
  isVue?: boolean,
  isCssModule?: boolean,
  sourceMap?: boolean,
  isNeedInlineMinification?: boolean,
  postcss?: object,
}

export default (config: any, options: options, loader: any, loaderOptions: any) => {
  const { isProd, isVue } = options
  const cssRule = config.module.rule('css').test(/\.css$/)

  if (isProd) {
    cssRule
      .use('extract-css-loader')
      .loader(miniCssExtractPlugin.loader)
      .options({
        hmr: false,
        reloadAll: true
      })
  } else if (isVue) {
    cssRule
      .use('vue-style-loader')
      .loader(vueStyleLoader)
      .options({
        sourceMap: true
      })
  } else {
    cssRule
      .use('style-loader')
      .loader(styleLoader)
  }

  cssRule
    .use('css-loader')
    .loader(require.resolve('css-loader'))
    .options({
      modules: options.isCssModule,
      sourceMap: options.sourceMap
    })

  if (options.isNeedInlineMinification) {
    cssRule
      .use('cssnano')
      .loader('postcss-loader')
      .options({
        plugins: [require('cssnano')(cssnanoOptions)]
      })
  }

  cssRule
    .use('postcss-loader')
    .loader('postcss-loader')
    .options({
      sourceMap: options.sourceMap,
      ...options.postcss
    })

  if (loader) {
    cssRule
      .use(loader)
      .loader(loader)
      .options({
        sourceMap: options.sourceMap,
        ...loaderOptions
      })
  }
}
