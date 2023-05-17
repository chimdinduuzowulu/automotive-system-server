module.exports = (sequelize, DataTypes) => {
  // const { type: DataTypes.STRING, allowNull: false } = { type: DataTypes.STRING, allowNull: false,}
  const Login = sequelize.define('Login', {
    userName: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
  });
  return Login;
};
