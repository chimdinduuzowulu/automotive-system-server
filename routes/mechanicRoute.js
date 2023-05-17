const router = require('express').Router();
const mechanicController = require('../controllers/MechanicController');

router.get('/userCity/:city', mechanicController.getMechanics);
router.get('/:id', mechanicController.getMechanic);
router.delete('/:id', mechanicController.removeMechanic);
router.post('/updateProfile', mechanicController.updateProfile);
router.post('/createProfile', mechanicController.createProfile);
module.exports = router;
