module.exports = {
  
  devtool: 'eval',
  // This is the entry point or start of our react applicaton
  entry: [
    "webpack-hot-middleware/client",
    "./app/App.js"
  ],

  // The plain compiled Javascript will be output into this file
  output: {
    filename: "public/bundle.js"
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  // This section desribes the transformations we will perform
  module: {
    loaders: [
      { test: /\.js?$/,
        loader: 'babel-loader',
        exclude: path.join(__dirname, 'node_modules') },
      { test: /\.scss?$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'src', 'styles') },
      { test: /\.png$/,
        loader: 'file' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file'}
    ]
  }
};
