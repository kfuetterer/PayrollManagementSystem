module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define("Employee", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    street_address: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    pay_type: DataTypes.STRING,
    pay_rate: DataTypes.DECIMAL,
    companyId: DataTypes.INTEGER,
    admin: DataTypes.BOOLEAN
  },
    {
      classMethods: {
        associate: function(models) {
          Employee.belongsTo(models.Company, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    }
  );
  return Employee;
};