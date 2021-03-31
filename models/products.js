"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    toJSON() {
      return { ...this.get() };
    }
  }
  Products.init(
    {
      uuid: DataTypes.UUID,
      name: DataTypes.STRING(100),
      description: DataTypes.TEXT,
      image_url: DataTypes.TEXT,
      sku_no: DataTypes.STRING(50),
      price: DataTypes.INTEGER,
      qty: DataTypes.INTEGER,
    },
    {
      sequelize,
      paranoid: true,
      tableName: "products",
      modelName: "Products",
    }
  );
  return Products;
};
