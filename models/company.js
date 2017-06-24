module.exports = function(sequelize, DataTypes) {
  var Company = sequelize.define("Company", {
    company_name: { type: DataTypes.STRING, allowNull: false }
  },
    {
      classMethods: {
        associate: function(models) {
          Company.hasMany(models.Employees, {
            onDelete: "cascade"
          });
        }
      }
    }
  );
  return Company;
};