module.exports = function(sequelize, DataTypes) {
  var Timeoffsegment = sequelize.define("Timeoffsegment", {
    start_date: DataTypes.STRING,
    end_date: DataTypes.STRING,
    hoursperday: DataTypes.INTEGER,
    notes: DataTypes.STRING,
    include_weekend: DataTypes.BOOLEAN,
    include_holidays: DataTypes.BOOLEAN,
    employeeId: DataTypes.INTEGER
  },
   {
      classMethods: {
        associate: function(models) {
          Timeoffsegment.belongsTo(models.Employee, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    }
  );
  return Timeoffsegment;
};