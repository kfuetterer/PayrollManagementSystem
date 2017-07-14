var Schedule = require("../models/schedule");
var db = require("../models");

module.exports = {
  index: function(req, res) {
    db.Schedule.findAll({ 
      where: {
        employeeId: req.params.id
      }
    }).then(function(doc) {
        res.json(doc);
      }).catch(function(err) {
        res.json(err);
      });
  }
};
