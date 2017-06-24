module.exports = function(sequelize, DataTypes) {
  var Payrollcycle = sequelize.define("Payrollcycle", {
    year: { type: DataTypes.DATE, allowNull: false },
    start_date: { type: DataTypes.DATE, allowNull: false },
    end_date: { type: DataTypes.DATE, allowNull: false },
    directdeposit_date: { type: DataTypes.DATE, allowNull: false },
    check_date: { type: DataTypes.DATE, allowNull: false }
  },
    {
      classMethods: {
        associate: function(models) {
          Payrollcycle.hasMany(models.Post, {
            onDelete: "cascade"
          });
        }
      }
    }
  );
  return Payrollcycle;
};