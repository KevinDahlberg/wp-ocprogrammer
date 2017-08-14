var webpack = require('webpack');

module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/client/assets',
    filename: 'bundle.js',
    publicPath: 'assets'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['latest', 'stage-o', 'react']
        }
      }
    ]
  }
};
