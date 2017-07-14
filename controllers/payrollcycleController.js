var Payrollcycle = require("../models/payrollcycle");
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
    db.Payrollcycle.find(query)
    .then(function(doc) {
        res.json(doc);
      }).catch(function(err) {
        res.json(err);
      });
  }
};
