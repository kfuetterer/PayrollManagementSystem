var Worksegment = require("../models/worksegment");
var db = require("../models");

module.exports = {
  index: function(req, res) {
    db.Worksegment.findAll({ 
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
    db.Worksegment.create(req.body)
    .then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  update: function(req, res) {
    db.Worksegment.update({
      where: {
        id: req.params.id
      }
    }, req.body
    ).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  }
};
