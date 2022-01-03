'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Sales',
    [
      {
        id: 1,
        user_id: 3,
        seller_id: 2,
        total_price: 200.50,
        delivery_address: 'Rua tal',
        delivery_number: 'Numero tal',
        status: 'vendido',
      },
    ],
    {},
    );
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sales', null, {});
  },
};
