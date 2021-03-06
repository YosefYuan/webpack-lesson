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
            test: /\.scss$/,
            use: ['style-loader', {
                loader: 'css-loader',
                options: {
                    importLoaders: 2,
                }
            }, 'sass-loader', 'postcss-loader']
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
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
        new CleanWebpackPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    }
}