import miniCssExtractPlugin from 'mini-css-extract-plugin';

const cssnanoOptions = {
  safe: true,
  autoprefixer: { disable: true },
  mergeLonghand: false
}

export default (config, { isProd, isVue }) => {
  const cssRule = config.module.rule('css').test(/\.css$/);

  if (isProd) {
    cssRule
      .use('extract-css-loader')
      .loader(miniCssExtractPlugin.loader)
      .options({
        hmr: false,
        reloadAll: true
      });
  } else if (isVue) {
    cssRule
      .use('vue-style-loader')
      .loader()
      .options({
        sourceMap: true
      });
  } else {
    cssRule
      .use('style-loader')
      .loader();
  }
}
