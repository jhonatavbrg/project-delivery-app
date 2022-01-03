'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
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
  
  User.associate = (models) => {
    User.hasMany(models.Sales, {
      foreignKey: 'seller_id',
      as: 'sale',
    });
    User.hasMany(models.Sales, {
      foreignKey: 'user_id',
      as: 'sale',
    });
  }

  return User;
};

