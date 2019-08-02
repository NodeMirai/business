const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.base')
const merge = require('webpack-merge')

module.exports = merge.smart(
  baseConfig,
  {
    mode: 'development',
    entry: {
      app: path.resolve(__dirname, '../src/app/index.tsx')
    },
    output: {
      path: path.resolve(__dirname, '../dist/'),
      filename: '[name]-[hash:8].js',
      chunkFilename: '[name].min.js',
      publicPath: '/'
    },
    devtool: 'cheap-module-eval-source-map',

    devServer: {
      contentBase: path.join(__dirname, '../.'),   // 可直接添加静态资源目录，可用作mock数据使用
      // compress: true,   // 是否启用gzip压缩
      port: 8080,
      historyApiFallback: true,
      proxy: {
        '/_mock/*': {
          target: 'http://localhost:8080/',
          pathRewrite: function(path) {
            return path.replace(/^\/_mock/, '/mock').replace(/\/?$/, '/index.json')
          }
        },
      }
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: '标题',
        template: path.resolve(__dirname, '../view/index.html'),
        // filename: 'index.html',    // 该字段的意义在于可以将注入好的html改名为服务端需要的模板引擎格式
        inject: true,   // 一般只在dev下使用，prod需要定制模版的引用资源
        favicon: path.resolve(__dirname, '../static/image/favicon.ico')
      }),
      // 需要查查具体用途再考虑加
      /* new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }), */
    ]
  }
)