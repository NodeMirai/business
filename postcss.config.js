const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  plugins: [
    /**
     * postcss-preset-env内包含autoprefixer，具体兼容可参考
     * https://github.com/browserslist/browserslist#readme
     */
    postcssPresetEnv({
      // browsers: []
    }),
  ],
}
