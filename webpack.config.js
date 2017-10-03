var webpack = require('webpack');

module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/assets',
    filename: 'bundle.js',
    publicPath: 'assets'
  },
  devServer: {
    inline: true,
    contentBase: __dirname + '/',
    port: 4000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'stage-0', 'react']
        }
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'stage-0', 'react']
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};
