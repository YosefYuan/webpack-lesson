const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: 'development',
  // devtool: 'cheap-module-eval-source-map', //development
  // devtool: 'cheap-module-source-map', // production
  devtool: 'cheap-module-source-map',
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.jpeg|png|gif$/,
        use: {
          loader: 'url-loader',
          options: {
            // placeholder
            name: '[name].[hash:8].[ext]',
            outputPath: 'images/',
            limit: 2048
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true
            }
          },
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};
