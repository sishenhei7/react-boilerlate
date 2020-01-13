import miniCssExtractPlugin from 'mini-css-extract-plugin';
import vueStyleLoader from 'vue-style-loader';
import styleLoader from 'style-loader';

const cssnanoOptions = {
  safe: true,
  autoprefixer: { disable: true },
  mergeLonghand: false
}

interface options {
  isProd: boolean,
  isVue: boolean
}

export default (config: any, options: options) => {
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
}
