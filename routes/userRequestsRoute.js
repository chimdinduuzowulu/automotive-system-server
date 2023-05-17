const router = require('express').Router();
const requestController = require('../controllers/RequestsController');

router.get('/:id', requestController.getRequests);
router.get('/:id', requestController.getRequest);
router.delete('/:id', requestController.removeRequest);
// router.post('/updateRequest', requestController.updateRequest);
router.post('/', requestController.createRequest);

module.exports = router;
