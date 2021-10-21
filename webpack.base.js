const path = require('path'),
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // resolve 配置 Webpack 如何寻找模块所对应的文件
    resolve: {
        // 我们配置了 extensions，表示在导入语句中没带文件后缀时，Webpack 会自动带上后缀去尝试访问文件是否存在
        extensions:['.js','.jsx','.ts','.tsx'],
        // 配置别名
        alias:{
            'Src':path.join(_dirname,'../','app/render'),
        }
    },

    module:{
        rules:[
            {
                // 当匹配到这些文件事，会采用babel-loader去处理
                test:/\.(js|jsx|ts|tsx)$/,
                exclude:/node_modules/,
                use: {
                    loader:'babel-loader',
                }
            }
        ]
    },

    plugins:[
        new CleanWebpackPlugin()
    ]
}