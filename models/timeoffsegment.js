module.exports = function(sequelize, DataTypes) {
  var Timeoffsegment = sequelize.define("Timeoffsegment", {
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    hoursperday: DataTypes.INTEGER,
    notes: DataTypes.STRING,
    include_weekend: DataTypes.BOOLEAN,
    include_holidays: DataTypes.BOOLEAN,
    approved: DataTypes.BOOLEAN,
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