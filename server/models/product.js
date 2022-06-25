'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product.belongsTo(models.User, {
        as : "user",
        foreignKey : {
          name : "idUser"
        },
      });

      product.hasMany(models.transaction, {
        as : "transaction",
        foreignKey : {
          name : "idProduct"
        },
      });

      product.belongsToMany(models.category, {
        as: "categories",
        through: {
          model: "productcategory",
          as: "bridge",
        },
        foreignKey: "idProduct",
      });
    }
  }
  product.init({
    image: DataTypes.STRING,
    tittle: DataTypes.STRING,
    desc: DataTypes.STRING,
    price: DataTypes.STRING,
    idUser: DataTypes.INTEGER,
    qty: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};