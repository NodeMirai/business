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
        '/b/*': {
          target: 'http://localhost:8086',
          pathRewrite: {"^/b" : ""}
        },
      }
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: '标题',
        template: path.resolve(__dirname, '../view/index.html'),
        // filename: 'index.html',    // 该字段的意义在于可以将注入好的html改名为服务端需要的模板引擎格式
        inject: true,
        favicon: path.resolve(__dirname, '../static/image/favicon.ico')
      }),
    ]
  }
)