module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define("Employee", {
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    street_address: { type: DataTypes.STRING, allowNull: false },
    phone_number: { type: DataTypes.INTEGER, allowNull: false },
    email: { 
      type: DataTypes.STRING, 
      allowNull: false, 
      unique: true,
      validate: {
        len: {
          args: [6, 128],
          msg: "Email address must be between 6 and 128 characters in length"
        },
        isEmail: {
          msg: "Email address must be valid"
        }
      }
    },
    password: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6, 15],
          msg: "Password must be between 6 and 15 characters in length"
        }
      }
    },
    admin: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: true },
    pay_type: { type: DataTypes.STRING, allowNull: false },
    pay_rate: { type: DataTypes.DECIMAL, allowNull: false },
  },
    {
      classMethods: {
        associate: function(models) {
          Employee.belongsTo(models.Company, {});
          Employee.hasMany(models.WorkSegment, {});
        }
      }
    }
  );
  return Employee;
};