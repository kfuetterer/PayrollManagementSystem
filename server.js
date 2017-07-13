var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes");

var dotenv = require('dotenv');
dotenv.load();

var db = require("./models");

var PORT = process.env.PORT || 3000;
var app = express();

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('./webpack.dev.config.js')
  const compiler = webpack(config)

  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(__dirname + "/public"));
app.use("/", routes);

db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("Now listening on port %s! Visit localhost:%s in your browser.", PORT, PORT);
  });
});