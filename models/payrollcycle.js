module.exports = function(sequelize, DataTypes) {
  var Payrollcycle = sequelize.define("Payrollcycle", {
    year: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    directdeposit_date: DataTypes.DATE,
    check_date: DataTypes.DATE
  });
  return Payrollcycle;
};