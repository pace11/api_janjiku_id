"use strict";

const parse = require("xml2js");
const fetch = require("node-fetch");
const { uuid } = require("../utils");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Seed to add products
     */
    let allProduct = [],
      allProductId = [];

    const options = {
      method: "GET",
      headers: {
        openapikey: "721407f393e84a28593374cc2b347a98",
      },
    };
    const fetch_response = await fetch(
      `http://api.elevenia.co.id/rest/prodservices/product/listing?page=1`,
      options
    );
    const data = await fetch_response;
    const products = await data.text();
    parse.parseString(products, (err, result) => {
      let item = result.Products.product;
      for (let i = 0; i < item.length; i += 1) {
        allProductId.push(item[i].prdNo[0]);
      }
    });

    if (allProductId.length > 0) {
      for (let j = 0; j < allProductId.length; j += 1) {
        const fetch_product_detail = await fetch(
          `http://api.elevenia.co.id/rest/prodservices/product/details/${allProductId[j]}`,
          options
        );
        const data_detail = await fetch_product_detail;
        const product = await data_detail.text();
        parse.parseString(product, (err, result) => {
          allProduct.push({
            uuid: uuid(),
            name: result.Product.prdNm[0],
            description: result.Product.htmlDetail[0],
            image_url: result.Product.prdImage01
              ? result.Product.prdImage01[0]
              : "https://via.placeholder.com/300",
            sku_no: result.Product.sellerPrdCd[0],
            price: Number(result.Product.selPrc[0]),
            qty: Number(result.Product.prdSelQty[0]),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          });
        });
      }
    }

    await queryInterface.bulkInsert("products", allProduct, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
