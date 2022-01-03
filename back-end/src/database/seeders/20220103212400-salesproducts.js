'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SalesProducts',
    [
      {
        sale_id: 1,
        product_id: 1,
        quantity: 24,
      },
    ],
    {},
    );
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('SalesProducts', null, {});
  },
};
