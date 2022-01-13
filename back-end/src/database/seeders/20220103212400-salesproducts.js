module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('salesProducts',
    [
      {
        sale_id: 1,
        product_id: 1,
        quantity: 24,
      },
    ],
    {}),
  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('salesProducts', null, {}),
};
