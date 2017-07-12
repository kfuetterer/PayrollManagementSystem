module.exports = function(sequelize, DataTypes) {
  var Worksegment = sequelize.define("Worksegment", {
    clock_in: { type: DataTypes.STRING, allowNull: true },
    clock_out: { type: DataTypes.STRING, allowNull: true },
    approved: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: true }
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
