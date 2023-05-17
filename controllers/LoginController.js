const { Login } = require('../models');
var bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();
//
const hashPassword = async (pass) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(pass, salt);
  return hash;
};
//
const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await hashPassword(password);
    const createDetails = await Login.create({
      userName: username,
      password: hashedPassword,
    });
    createDetails
      ? res.status(200).json({ message: 'Registered successfully' })
      : res.status(401).json({ message: 'Registration failed' });
  } catch (error) {
    res.status(401).json({ error: error });
  }
};
//
const checkLogin = async (req, res) => {
  const { username, password } = req.body;
  if (username === '' || password === '') {
    return res.status(404).json({ message: "Fields can't be empty**" });
  }
  try {
    const findUser = await Login.findOne({
      where: {
        username,
      },
    });
    if (!findUser) {
      return res.status(400).json({ message: 'Incorrect login credentials' });
    }
    //
    const pass = await bcrypt.compare(password, findUser.password);
    if (pass) {
      const mechanicID = findUser.id;
      res.status(200).json({ message: 'Login successful', mechanicID });
    } else {
      res.status(400).json({ message: 'Incorrect login credentials' });
    }
  } catch (error) {
    res.status(4001).json({ message: 'Internal server error**' });
  }
};
//
module.exports = {
  register,
  checkLogin,
};
