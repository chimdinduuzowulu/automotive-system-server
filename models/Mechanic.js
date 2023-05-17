const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Mechanic = sequelize.define('Mechanic', {
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    specialties: { type: DataTypes.STRING, allowNull: false },
    state: { type: DataTypes.STRING, allowNull: false },
    city: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    bio: { type: DataTypes.STRING, allowNull: false },
    profileImage: { type: DataTypes.STRING, allowNull: false },
    mechanicID: { type: DataTypes.STRING, allowNull: false },
  });
  return Mechanic;
};
