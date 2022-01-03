'use strict';

module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define("Sale", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL(9, 2),
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    status: DataTypes.STRING,
  }, {
    timestamps: {
      createdAt: 'sale_date',
      updatedAt: false,
    },
  });
  
  Sale.associate = (models) => {
    Sale.belongsTo(models.Users, {
      foreignKey: 'user_id',
      as: 'user',
    },
    {
      foreignKey: 'seller_id',
      as: 'seller',
    });
  }

  return Sale;
};