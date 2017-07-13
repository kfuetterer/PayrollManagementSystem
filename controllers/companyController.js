var Company = require("../models/company");
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
    db.Company.find(query, {
        companyId: req.body.companyId
    }).then(function(doc) {
        res.json(doc);
      }).catch(function(err) {
        res.json(err);
      });
  }
};