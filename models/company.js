module.exports = function(sequelize, DataTypes) {
  var Company = sequelize.define("Company", {
    company_name: { 
      type: DataTypes.STRING, 
      allowNull: false 
    }
  },
    {
      classMethods: {
        associate: function(models) {
          Company.hasMany(models.Employee, {
            onDelete: "cascade"
          });
        }
      }
    }
  );
  return Company;
};