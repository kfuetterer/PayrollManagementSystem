module.exports = function(sequelize, DataTypes) {
  var Schedule = sequelize.define("Schedule", {
    schedule_date: { type: DataTypes.DATE, allowNull: false },
    hours: { type: DataTypes.INTEGER, allowNull: true },
    start_time: { type: DataTypes.INTEGER, allowNull: true }
  },
    {
      classMethods: {
        associate: function(models) {
          Schedule.belongsTo(models.Employee, {
            onDelete: "cascade"
          });
        }
      }
    }
  );
  return Schedule;
};