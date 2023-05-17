module.exports = (sequelize, DataTypes) => {
  // const { type: DataTypes.STRING, allowNull: false } = { type: DataTypes.STRING, allowNull: false };
  const UserRequest = sequelize.define('UserRequest', {
    vehicleYear: { type: DataTypes.STRING, allowNull: false },
    petrolType: { type: DataTypes.STRING, allowNull: false },
    transmission: { type: DataTypes.STRING, allowNull: false },
    engineSize: { type: DataTypes.STRING, allowNull: false },
    horsePower: { type: DataTypes.STRING, allowNull: false },
    vehicleMake: { type: DataTypes.STRING, allowNull: false },
    carProblem: { type: DataTypes.STRING, allowNull: false },
    vehicleMillage: { type: DataTypes.STRING, allowNull: false },
    engineNos: { type: DataTypes.STRING, allowNull: false },
    userEmail: { type: DataTypes.STRING, allowNull: false },
    fullName: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    mechanicID: { type: DataTypes.STRING, allowNull: false },
    requestStatus: { type: DataTypes.STRING, allowNull: false },
  });
  return UserRequest;
};


