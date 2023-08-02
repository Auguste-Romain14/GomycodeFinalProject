var express = require('express');
var router = express.Router();
const scoreController = require('../controllers/scoreController');

router.get('/', scoreController.index);
router.get('/:id', scoreController.find);
router.post('/', scoreController.store);
router.put('/', scoreController.update);
router.delete('/', scoreController.destroy);

module.exports = router;

