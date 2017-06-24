module.exports = function(sequelize, DataTypes) {
  var Timeoffsegment = sequelize.define("Timeoffsegment", {
    start_date:  { type: DataTypes.DATE, allowNull: false },
    end_date: { type: DataTypes.DATE, allowNull: false },
    hoursperday: { type: DataTypes.INTEGER, allowNull: false },
    notes: { type: DataTypes.STRING, allowNull: true },
    include_weekend: { type: DataTypes.BOOLEAN, defaultValue: false },
    include_holidays: { type: DataTypes.BOOLEAN, defaultValue: false },
    approved: { type: DataTypes.BOOLEAN, defaultValue: false}
  }
  );
  return Timeoffsegment;
};