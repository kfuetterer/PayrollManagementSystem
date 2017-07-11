var Schedule = require("../models/schedule");
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
    db.Schedule.find(query, {
      EmployeeId: req.user.id
    }).then(function(doc) {
        res.json(doc);
      }).catch(function(err) {
        res.json(err);
      });
  }
};
