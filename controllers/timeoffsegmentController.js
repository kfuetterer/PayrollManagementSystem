var Timeoffsegment = require("../models/timeoffsegment");
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
    db.Timeoffsegment.find(query)
      .then(function(doc) {
        res.json(doc);
      }).catch(function(err) {
        res.json(err);
      });
  },
  create: function(req, res) {
    db.Timeoffsegment.create({
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      hoursperday: req.body.hoursperday,
      notes: req.body.notes,
      include_weekend: req.body.include_weekend,
      include_holidays: req.body.include_holidays,
      approved: req.body.approved,
      employeeE: req.user.email
    }).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  }
};
