"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        allowNull: true,
        type: Sequelize.STRING(100),
      },
      description: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      image_url: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      sku_no: {
        allowNull: true,
        type: Sequelize.STRING(50),
      },
      price: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      qty: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("products");
  },
};
