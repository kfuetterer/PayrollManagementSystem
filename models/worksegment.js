module.exports = function(sequelize, DataTypes) {
  var Worksegment = sequelize.define("Worksegment", {
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
