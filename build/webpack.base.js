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
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const path = require('path')

module.exports = {
  name: 'single-page-react',
  context: __dirname,
  resolve: {
    // mainFiles: ['index.tsx'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.sass', '.less', '.css'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.sass', '.less', '.css'],
      })
    ],
    alias: {
      // 工具js方法
      // 图片
      // 工具scss样式
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'     // ts-loader编译的结果还需要babel-loader进行一次处理，才可确保兼容????? ts-loader自身是否可直接编译为es5呢？？？
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,     // 该配置可确保只存在静态分析，但在执行的时候不会因为静态分析中出现的问题报错
            },
          }
        ]
      },
      {
        test: /\.css$/,
        include: [
          path.join(__dirname, '../node_modules/antd/dist/antd.css')
        ],
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.less$/,   // antd使用的less
        include: [
          path.join(__dirname, '../node_modules/ant-design-pro'),
          path.join(__dirname, '../node_modules/ant'),
        ],
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
      },
    ],
  },
}