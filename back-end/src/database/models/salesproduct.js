'use strict';

module.exports = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define("salesProduct", {
    quantity: DataTypes.INTEGER,
  }, {
    timestamps: false,
  });

  salesProduct.associate = (models) => {
    // a chave do objeto models deve ser a mesma definida como primeiro parâmetro do sequelize.define
    models.product.belongsToMany(models.sale, {
      as: 'sales',
      through: salesProduct,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
    models.sale.belongsToMany(models.product, {
      as: 'products',
      through: salesProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
  };

  return salesProduct;
};