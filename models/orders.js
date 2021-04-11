'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    toJSON() {
      return { ...this.get() }
    }
  }
  Orders.init(
    {
      numberOrder: DataTypes.STRING,
      fullname: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      type: DataTypes.STRING,
      template: DataTypes.STRING,
      status: DataTypes.INTEGER,
    },
    {
      sequelize,
      tableName: 'orders',
      modelName: 'Orders',
    },
  )
  return Orders
}
