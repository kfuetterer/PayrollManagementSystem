module.exports = function(sequelize, DataTypes) {
  var Company = sequelize.define("Company", {
    company_name: DataTypes.STRING
  });
  return Company;
};