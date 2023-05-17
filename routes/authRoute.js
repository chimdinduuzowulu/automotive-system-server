const router = require('express').Router();
const loginController = require('../controllers/LoginController');

router.post('/register', loginController.register);
router.post('/checkLogin', loginController.checkLogin);
// router.post('/updateLogin', loginController.updateLogin);
// router.post('/register', loginController.register);

module.exports = router;
