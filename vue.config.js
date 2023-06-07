const path = require( 'path' );
const { styles } = require( '@ckeditor/ckeditor5-dev-utils' );

module.exports = {
  transpileDependencies: [
      /ckeditor5-[^/\\]+[/\\]src[/\\].+\.js$/
  ],
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    svgRule.exclude.add( path.join(__dirname, 'node_modules', '@ckeditor'));
    svgRule.exclude.add( path.join(__dirname, 'node_modules', '@wiris'));
    config.module
      .rule('cke-svg')
      .test(/\.svg$/)
      .use('raw-loader')
      .loader('raw-loader');
    config.module
      .rule('cke-css')
      .test(/ckeditor5-[^/\\]+[/\\].+\.css$/)
      .use('postcss-loader')
      .loader('postcss-loader')
      .options({
        postcssOptions: styles.getPostCssConfig({
          themeImporter: {
            themePath: require.resolve( '@ckeditor/ckeditor5-theme-lark' ),
          },
          minify: true
        })
      });
  }
}