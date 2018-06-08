const path = require('path');
const webpack = require('webpack');
// 用于清空 dist 目录。
const CleanWebpackPlugin = require('clean-webpack-plugin');
// 用于把src的文件复制到dist
const CopyWebpackPlugin = require('copy-webpack-plugin');
// 用于把最终的 css 分离成单独文件
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
/* 生成html */
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

    // 入口文件的配置项，可以指定多个入口起点
    entry: {

        'index': './src/method1/index.js',

    },

    output: {
        path: '/dist',
        filename: '[name].js'
    },

    externals: {
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'window.$': 'jquery',
    },

    // 模块：例如解读CSS,图片如何转换，压缩
    module: {
        rules: [ // 用于规定在不同模块被创建时如何处理模块的规则数组

            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            //添加对样式表.css格式文件的处理
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'postcss-loader'}
                ]
            },
            {
                test: /\.art$/,
                loader: "art-template-loader",
                options: {
                    // art-template options (if necessary)
                    // @see https://github.com/aui/art-template
                }
            }
        ]
    },

    // 插件，用于生产模版和各项功能
    plugins: [

        // 清空dist目录，第一个参数是要清理的目录的字符串数组
        new CleanWebpackPlugin(['./dist']),

        /* 复制文件，把src的css、images文件复制到pc下  */
        // new CopyWebpackPlugin([
        //   {from:path.resolve(__dirname,'./src/components/vendor'),to:path.resolve(__dirname,'../www/static/pc/vendor')},
        //   {from:path.resolve(__dirname,'./src/css'),to:path.resolve(__dirname,'../www/static/pc/css')},
        //   {from:path.resolve(__dirname,'./src/images'),to:path.resolve(__dirname,'../www/static/pc/images')},
        // ]),

        // new ExtractTextPlugin('css/index.css'),

        new HtmlWebpackPlugin({
            title: 'title',  // 生成 HTML 文档的标题
            filename: 'index.html', // 写入 HTML 文件的文件名，默认 `index.html`, 生成的html存放路径，相对于path
            // favicon: './src/img/favicon.ico', // favicon路径，通过webpack引入同时可以生成hash值
            template: './src/method1/test.html', // html模板路径
            inject: true, // js插入的位置，true/'head'/'body'/false
            hash: true, // 为静态资源生成hash值
            chunks: ['index'], // 需要引入的chunk，不配置就会引入所有页面的资源js
            minify: { // 压缩HTML文件
                removeComments: false, // 移除HTML中的注释
                collapseWhitespace: false // 删除空白符与换行符
            }
        }),
    ],

    // 配置webpack开发热更新服务功能,它提供了一个简单的web服务器和实时重载的功能（只刷新页面不刷新控制台）
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        host: 'localhost',
        disableHostCheck: true, //绕过主机检查
        hot: true,
        https: false,  // 是否采用https，默认是http
        inline: true,
        progress: true, // 输出运行进度到控制台。
        watchContentBase: true, //观察contentBase选项提供的文件。文件更改将触发整页重新加载
        compress: true,
        port: 8000
    }
};
