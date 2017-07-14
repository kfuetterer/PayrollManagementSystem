var Timeoffsegment = require("../models/timeoffsegment");
var db = require("../models");

module.exports = {
  index: function(req, res) {
    db.Timeoffsegment.findAll({ 
      where: {
        employeeId: req.params.id
      }
    }).then(function(doc) {
        res.json(doc);
      }).catch(function(err) {
        res.json(err);
      });
  },
  create: function(req, res) {
    db.Timeoffsegment.create(req.body)
    .then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  }
};
