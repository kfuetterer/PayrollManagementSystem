const path = require('path');
const webpack = require('webpack');

module.exports = {
  
  devtool: 'eval',
  // This is the entry point or start of our react applicaton
  entry: [
    "webpack-hot-middleware/client",
    "./app/App.js"
  ],

  // The plain compiled Javascript will be output into this file
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  // This section desribes the transformations we will perform
  module: {
    loaders: [
      { test: /\.js?$/,
        loader: 'babel',
        exclude: path.join(__dirname, 'node_modules') },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file'}
    ]
  }
};
