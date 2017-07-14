module.exports = function(sequelize, DataTypes) {
  var Schedule = sequelize.define("Schedule", {
    start_date: DataTypes.STRING,
    end_date: DataTypes.STRING,
    employeeId: DataTypes.INTEGER
  },
    {
      classMethods: {
        associate: function(models) {
          Schedule.belongsTo(models.Employee, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    }
  );
  return Schedule;
};