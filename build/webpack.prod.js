const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin')

const baseConfig = require('./webpack.base')

const isBundleAnalyzer = process.env.BUNDLE_ANALYZER === 'true'

module.exports = merge.smart(
  baseConfig,
  {
    mode: 'production',
    entry: {
      app: path.resolve(__dirname, '../src/app/index.tsx')
    },
    // 这里需要调整一下，将打包路径放在koa的静态服务文件中
    output: {
      path: path.resolve(__dirname, '../dist/single-page-react/js/dist'),
      filename: '[name]-[hash:8].js',
    },
    plugins: [
      // 将所有静态资源复制到部署包中
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, '../static/lib'),
          to: path.resolve(__dirname, '../dist/single-page-react/js/lib'),
        },
        {
          from: path.resolve(__dirname, '../static/image/favicon.ico'),
          to: path.resolve(__dirname, '../dist/single-page-react/image/favicon.ico'),
        },
      ]),
      new HtmlWebpackPlugin({
        title: '标题',
        template: path.resolve(__dirname, '../view/index.html'),
        // filename: 'index.html',    // 该字段的意义在于可以将注入好的html改名为服务端需要的模板引擎格式
        inject: false,
        favicon: path.resolve(__dirname, '../static/image/favicon.ico')
      }),
    ]
  },
  // 该插件跑起来就执行
  isBundleAnalyzer && {
    plugins: [new BundleAnalyzerPlugin()],
  }
)