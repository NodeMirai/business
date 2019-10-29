/**
 * webpack基础配置
 * 1. context上下文基础变量
 * 2. resolve别名处理：主要可用来简化import时路径
 *    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.sass', '.less', '.css'],
 *    alias: {}
 * 3. module：基础loader
 * - js，jsx，tsx
 * - 样式scss、less
 * - 兼容性autoprefixer
 * 4. 插件
 * - HtmlWebpackPlugin:
 * - DllReferencePlugin: (需要确定是干嘛用的)
 */
const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  name: 'single-page-react',
  context: __dirname,
  resolve: {
    // mainFiles: ['index.tsx'],
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.scss',
      '.sass',
      '.less',
      '.css',
    ],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
        extensions: [
          '.ts',
          '.tsx',
          '.js',
          '.jsx',
          '.scss',
          '.sass',
          '.less',
          '.css',
        ],
      }),
    ],
    alias: {
      /**
       * 现由tsconfig接管
       * 1. 工具js方法
       * 2. 图片
       * 3. 工具scss样式
       * 4. 组件目录
       * 5. ...
       */
    },
  },
  module: {
    rules: [
      {
        // 确保代码在未经过处理时进行检测，添加enforce: pre配置项
        enforce: 'pre',
        test: /\.(jsx|tsx|js|ts)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader', // ts-loader编译的结果还需要babel-loader进行一次处理，才可确保兼容????? ts-loader自身是否可直接编译为es5呢？？？
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.(scss|sass|css)$/,
        // exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      },
      /* {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      }, */
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          // 项目基本框架等,因为所有地方必用，因此最优先拆分
          chunks: 'all',
          test: /(react|react-dom|react-dom-router|core-js|redux)/,
          priority: 100,
          name: 'vendors',
        },
        asyncCommons: {
          // 异步加载公共包、组件等，所有异步的东西都应该提前放在异步组件中
          chunks: 'async',
          minChunks: 2,
          name: 'async-commons',
          priority: 90,
        },
        commons: {
          // 其他同步加载公共包
          chunks: 'all',
          minChunks: 2,
          name: 'commons',
          priority: 80,
        },
      },
    },
  },
}
