const { Mechanic } = require('../models');
var bcrypt = require('bcryptjs');
//
const createProfile = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      specialties,
      state,
      city,
      email,
      phone,
      bio,
      profileImage,
      mechanicID,
    } = req.body;

    const profile = await Mechanic.create({
      firstName,
      lastName,
      specialties,
      state,
      city:city.toLowerCase(),
      email,
      phone,
      bio,
      profileImage,
      mechanicID,
    });
    profile
      ? res.status(200).json({ message: 'Profile created successfully' })
      : res.status(401).json({ message: 'Profile created failed' });
  } catch (error) {
    res.status(401).json({ message: 'Internal server error!!' });
  }
};
// .......work this
const updateProfile = async (req, res) => {
  const {
    firstName,
    lastName,
    specialties,
    state,
    city,
    email,
    phone,
    bio,
    profileImage,
    mechanicID,
  } = req.body;
  if (
    !firstName ||
    firstName === '' ||
    !lastName ||
    lastName === '' ||
    !specialties ||
    specialties === '' ||
    !state ||
    state === '' ||
    !city ||
    city === '' ||
    !email ||
    email === '' ||
    !phone ||
    phone === '' ||
    !bio ||
    bio === '' ||
    !profileImage ||
    profileImage === '' ||
    !mechanicID ||
    mechanicID === ''
  ) {
    return res.status(404).json({ message: "Fields can't be empty**" });
  }
  try {
    const updateUser = await Mechanic.update(
      {
        firstName,
        lastName,
        specialties,
        state,
        city,
        email,
        phone,
        bio,
        profileImage,
        mechanicID,
      },
      {
        where: {
          mechanicID,
        },
      }
    );
    if (!updateUser) {
      return res.status(400).json({ message: 'Profile update failed' });
    }
    res
      .status(200)
      .json({ message: 'Profile update successful', data: updateUser });
  } catch (error) {
    res.status(4001).json({ error: error, message: 'Internal server error**' });
  }
};
//
// Get Mechanic
const getMechanic = async (req, res) => {
  try {
    const id = req.params.id;
    const getMechanic = await Mechanic.findOne({
      where: { id },
    });
    if (getMechanic === null) {
      return res.status(401).json({ message: 'Empty data', data: getMechanic });
    }
    return res.status(200).json({ message: 'data fetched', data: getMechanic });
  } catch (error) {
    res.status(401).json({ message: 'data error', error: error });
  }
};
//
// Get all mechanics
const getMechanics = async (req, res) => {
  try {
    const city = req.params.city;
    const getAllMechanics = await Mechanic.findAll({
      where: { city: city },
      order: [['id', 'DESC']],
    });

    if (getAllMechanics === null || getAllMechanics.length === 0) {
      return res
        .status(200)
        .json({ message: 'No data', data: getAllMechanics });
    }
    return res
      .status(200)
      .json({ message: 'Data fetched', data: getAllMechanics });
  } catch (error) {
    res.status(404).json({ errorMessage: error });
  }
};
// Remove Mechanic
const removeMechanic = async (req, res) => {
  try {
    const id = req.params.mechanicID;
    const removeAMechanic = await Mechanic.destroy({
      where: { id },
    });
    if (removeAMechanic === null) {
      return res
        .status(401)
        .json({ message: 'No data was deleted', data: removeAMechanic });
    }
    return res
      .status(200)
      .json({ message: 'Mechanic deleted successfully', data: getMechanic });
  } catch (error) {
    res.status(401).json({ message: 'data error', error: error });
  }
};
//
module.exports = {
  updateProfile,
  createProfile,
  getMechanic,
  getMechanics,
  removeMechanic,
};
