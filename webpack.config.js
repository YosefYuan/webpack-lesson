const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js' // 可以简写
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
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
