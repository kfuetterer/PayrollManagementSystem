var express = require("express");
var bodyParser = require("body-parser");
var DatePicker = require("pickadate");

var dotenv = require('dotenv');
dotenv.load();

var db = require("./models");

var PORT = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(__dirname + "/public"));

 $('.datepicker').DatePicker({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 2 // Creates a dropdown of 15 years to control year
  });

db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("Now listening on port %s! Visit localhost:%s in your browser.", PORT, PORT);
  });
});