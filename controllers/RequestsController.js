const { UserRequest } = require('../models');
var bcrypt = require('bcryptjs');
//
const createRequest = async (req, res) => {
  try {
    const {
      vehicleYear,
      petrolType,
      transmission,
      engineSize,
      horsePower,
      vehicleMake,
      carProblem,
      vehicleMillage,
      engineNos,
      userEmail,
      fullName,
      phone,
      mechanicID,
      requestStatus,
    } = req.body;

    const request = await UserRequest.create({
      vehicleYear,
      petrolType,
      transmission,
      engineSize,
      horsePower,
      vehicleMake,
      carProblem,
      vehicleMillage,
      engineNos,
      userEmail,
      fullName,
      phone,
      mechanicID,
      requestStatus,
    });
    request
      ? res
          .status(200)
          .json({ message: 'Received! Contact mechanic via email or phone' })
      : res.status(401).json({ message: 'Request creation failed' });
  } catch (error) {
    res.status(401).json({ error: error });
  }
};
// .......work this
// const updateProfile = async (req, res) => {
//   const {
//     firstName,
//     lastName,
//     specialties,
//     address,
//     email,
//     phone,
//     bio,
//     profileImage,
//     mechanicID,
//   } = req.body;
//   if (
//     lastName === '' ||
//     specialties === '' ||
//     address === '' ||
//     email === '' ||
//     phone === '' ||
//     bio === '' ||
//     profileImage === '' ||
//     mechanicID
//   ) {
//     return res.status(404).json({ message: "Fields can't be empty**" });
//   }
//   try {
//     const updateUser = await Mechanic.update(
//       {
//         id,
//         firstName,
//         lastName,
//         specialties,
//         address,
//         email,
//         phone,
//         bio,
//         profileImage,
//         mechanicID,
//       },
//       {
//         where: {
//           id,
//         },
//       }
//     );
//     if (!updateUser) {
//       return res.status(400).json({ message: 'Profile update failed' });
//     }
//     res
//       .status(200)
//       .json({ message: 'Profile update successful', data: updateUser });
//   } catch (error) {
//     res.status(4001).json({ error: error, message: 'Internal server error**' });
//   }
// };
//
// Get Mechanic
const getRequest = async (req, res) => {
  try {
    const id = req.params.id;
    const getRequest = await UserRequest.findOne({
      where: { mechanicID: id },
    });
    if (getRequest === null) {
      return res
        .status(401)
        .json({ message: 'Error fetching data', data: getRequest });
    }
    return res
      .status(200)
      .json({ message: 'Request fetched', data: getRequest });
  } catch (error) {
    res.status(401).json({ message: 'data error', error: error });
  }
};
//
// Get all mechanics
const getRequests = async (req, res) => {
  try {
    const id = req.params.id;
    const getAllRequests = await UserRequest.findAll({
      where: { mechanicID: id },
      order: [['id', 'DESC']],
    });

    if (getAllRequests === null || getAllRequests.length === 0) {
      return res
        .status(200)
        .json({ message: 'No request found', data: getAllRequests });
    }
    return res
      .status(200)
      .json({ message: 'Request fetched', data: getAllRequests });
  } catch (error) {
    res.status(404).json({ errorMessage: error });
  }
};
//
// Remove Mechanic
const removeRequest = async (req, res) => {
  try {
    const id = req.params.id;
    const removeARequest = await UserRequest.destroy({
      where: { id },
    });
    if (removeARequest === null) {
      return res
        .status(401)
        .json({ message: 'No data was deleted', data: removeARequest });
    }
    return res
      .status(200)
      .json({ message: 'Request deleted successfully', data: removeARequest });
  } catch (error) {
    res.status(401).json({ message: 'data error', error: error });
  }
};
//
module.exports = {
  createRequest,
  getRequest,
  getRequests,
  removeRequest,
};
