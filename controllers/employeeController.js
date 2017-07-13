var Employee = require("../models/employee");
var db = require("../models");

module.exports = {
  index: function(req, res) {
    db.Employee.find({id: req.params.id})
      .then(function(doc) {
        res.json(doc);
      }).catch(function(err) {
        res.json(err);
      });
  },
  create: function(req, res) {
    db.Employee.create(req.body).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  }
};
