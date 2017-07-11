module.exports = function(sequelize, DataTypes) {
  var Schedule = sequelize.define("Schedule", {
    title: { type: DataTypes.STRING, allowNull: false},
    schedule_date: { type: DataTypes.DATE, allowNull: false },
    end_time: { type: DataTypes.TIME, allowNull: true },
    start_time: { type: DataTypes.TIME, allowNull: true }
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