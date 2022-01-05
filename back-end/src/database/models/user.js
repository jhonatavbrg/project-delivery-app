'use strict';

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    timestamps: false,
  });
  
  user.associate = (models) => {
    user.hasMany(models.sale, {
      foreignKey: 'seller_id',
      as: 'sale',
    });
    user.hasMany(models.sale, {
      foreignKey: 'user_id',
      as: 'user',
    });
  }

  return user;
};

