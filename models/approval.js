module.exports = function(sequelize, DataTypes) {
  var Approval = sequelize.define("Approval", {
    approved: { type: DataTypes.BOOLEAN, defaultValue: false }
  },
    {
      classMethods: {
        associate: function(models) {
          Approval.belongsTo(models.Employee, {});
          Approval.belongsTo(models.Payrollcycle, {});
          Approval.belongsTo(models.Worksegment, {});
        }
      }
    }
  );
  return Approval;
};