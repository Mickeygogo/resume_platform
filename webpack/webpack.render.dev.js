const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
    mode:'development',
    entry:{
        // 对应渲染进程的app.jsx 入口文件
        index: path.resolve(__dirname,"../app/render/app.jsx"),
    },
    output:{
        filename:'[name].[hash].js',
        path: path.resolve(__dirname,'../dist'),
    },
    target:'electron-renderer',
    devtool:'inline-source-map',
    devServer: {
        contentBase:path.join(__dirname,'../dist'),
        compress: true,
        host:'127.0.0.1',
        port:3001,
        hot:true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../app/render/index.html'),
            filename: path.resolve(__dirname, '../dist/index.html'),
            chunks:['index'],
        }),
    ],
};

module.exports = webpackMerge.merge(baseConfig, devConfig);