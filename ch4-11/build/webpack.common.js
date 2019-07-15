const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
module.exports = {
    entry: {
        main: './src/index.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.(jpg|png|gif|jpeg)$/,
            use: {
                loader: 'url-loader',
                options: {
                    name: '[name]_[hash].[ext]',
                    outputPath: 'images/',
                    limit: 8192
                }
            }
        }, {
            test: /\.(eot|ttf|svg|woff)$/,
            use: {
                loader: 'file-loader'
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            '$': 'jquery'
        })
    ],
    optimization: {
        runtimeChunk: {
            name: 'runtime'
        },
        usedExports: true,
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    name: 'vendors'
                }
            }
        },
    },
    performance: false,
    output: {
        path: path.resolve(__dirname, '../dist')
    }
}