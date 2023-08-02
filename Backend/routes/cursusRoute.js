var express = require('express');
var router = express.Router();
const cursusController = require('../controllers/cursusController');

router.get('/', cursusController.index);
router.get('/:id', cursusController.find);
router.post('/', cursusController.store);
router.put('/:id', cursusController.update);
router.delete('/:id', cursusController.destroy);

module.exports = router;