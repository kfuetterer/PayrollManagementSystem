module.exports = function(sequelize, DataTypes) {
  var Schedule = sequelize.define("Schedule", {
    title: DataTypes.STRING,
    schedule_date: DataTypes.DATE,
    end_time: DataTypes.TIME,
    start_time: DataTypes.TIME,
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