const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
module.exports = {
    mode: 'development',
    devtool: 'cheap-module-inline-source-map',
    entry: {
        main: './src/index.js',
    },
    devServer: {
        contentBase: './dist',
        open: true
    },
    module: {
        rules: [{
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
            test: /\.(eot|ttf|svg|woff)$/,
            use: {
                loader: 'file-loader'
            }
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.html'
    }), new CleanWebpackPlugin()],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
}