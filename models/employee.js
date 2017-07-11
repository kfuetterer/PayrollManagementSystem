module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define("Employee", {
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    street_address: { type: DataTypes.STRING, allowNull: false },
    phone_number: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    pay_type: { type: DataTypes.STRING, allowNull: false },
    pay_rate: { type: DataTypes.DECIMAL, allowNull: false },
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