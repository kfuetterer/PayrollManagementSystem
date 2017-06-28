module.exports = function(sequelize, DataTypes) {
  var Worksegment = sequelize.define("Worksegment", {
    clock_in: { type: DataTypes.TIME, allowNull: true },
    clock_out: { type: DataTypes.TIME, allowNull: true },
    approved: { type: DataTypes.BOOLEAN, defaultValue: false }
  },
    {
      classMethods: {
        associate: function(models) {
          Worksegment.belongsTo(models.Employee, {});
          Worksegment.belongsTo(models.Payrollcycle, {});
        },
      }
    }
  );
  return Worksegment;
};
