var Worksegment = require("../models/worksegment");
var db = require("../models");

module.exports = {
  index: function(req, res) {
    var query;
    if (req.query) {
      query = req.query;
    }
    else {
      query = req.params.id ? { id: req.params.id } : {};
    }
    db.Worksegment.find(query,{
      employeeId: req.body.employeeId
     }).then(function(doc) {
        res.json(doc);
      }).catch(function(err) {
        res.json(err);
      });
  },
  create: function(req, res) {
    db.Worksegment.create({
        clock_in: req.body.clock_in,
        clock_out: req.body.clock_out,
        employeeId: req.body.employeeId
      }).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  update: function(req, res) {
    db.Worksegment.update({
      id: req.params.id
    },
      req.body
    ).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  }
};
