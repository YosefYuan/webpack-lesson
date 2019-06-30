 const express = require('express');
 const webpack = require('webpack');
 const wepbackDevMiddleware = require('webpack-dev-middleware');
 const webpackConfig = require('./webpack.config');
 const compiler = webpack(webpackConfig);

 const app = express();

 app.use(wepbackDevMiddleware(compiler, {
     //  publicPath: webpackConfig.output.publicPath
 }))

 app.listen('3000', () => {
     console.log('server is running!');
 })