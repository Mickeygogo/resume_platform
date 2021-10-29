/*
 * @Author: your name
 * @Date: 2021-10-25 13:56:28
 * @LastEditTime: 2021-10-29 14:59:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /resume_platform/webpack/webpack.base.js
 */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // resolve 配置 Webpack 如何寻找模块所对应的文件
  resolve: {
    // 我们配置了 extensions，表示在导入语句中没带文件后缀时，Webpack 会自动带上后缀去尝试访问文件是否存在
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    // 配置别名
    alias: {
      Src: path.join(__dirname, '../', 'app/render'),
      Components: path.join(__dirname, '../', 'app/render/components'),
      Common: path.join(__dirname, '../', 'app/render/common'),
      Store: path.join(__dirname, '../', 'app/render/store'),
      Utils: path.join(__dirname, '../', 'app/render/common/utils'),
    },
  },

  module: {
    rules: [
      {
        // 当匹配到这些文件事，会采用babel-loader去处理
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(jpg|png|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },

  plugins: [new CleanWebpackPlugin()],
};
