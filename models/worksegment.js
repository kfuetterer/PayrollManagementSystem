module.exports = function(sequelize, DataTypes) {
  var Worksegment = sequelize.define("Worksegment", {
    clock_in: DataTypes.STRING,
    clock_out: DataTypes.STRING,
    employeeId: DataTypes.INTEGER
  },
    {
      classMethods: {
        associate: function(models) {
          Worksegment.belongsTo(models.Employee, {
            foreignKey: {
              allowNull: false
            }
          });
          Worksegment.belongsTo(models.Payrollcycle, {
            foreignKey: {
              allowNull: false
            }
          });
        },
      }
    }
  );
  return Worksegment;
};
