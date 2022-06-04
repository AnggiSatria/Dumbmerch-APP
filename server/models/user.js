'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.profile, {
        as: "profile",
        foreignKey : {
          name : "idUser"
        },
      });

      User.hasMany(models.product, {
        as : "products",
        foreignKey : {
          name : "idUser"
        },
      });

      User.hasMany(models.transaction, {
        as : "buyerTransaction",
        foreignKey : {
          name : "idBuyer"
        },
      });

      User.hasMany(models.transaction, {
        as : "sellerTransaction",
        foreignKey : {
          name : "idSeller"
        },
      });

      User.hasMany(models.chat, {
        as : "customerComplain",
        foreignKey : {
          name : "idSender"
        },
      });

      User.hasMany(models.chat, {
        as : "adminComplain",
        foreignKey : {
          name : "idRecipient"
        },
      });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};