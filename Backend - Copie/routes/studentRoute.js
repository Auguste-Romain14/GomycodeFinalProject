var express = require('express');
var router = express.Router();
const studentController = require('../controllers/studentController')

/* GET home page. */
router.get('/', studentController.index);

router.get('/:id', studentController.find);

router.post('/', studentController.store);

router.put('/:id', studentController.update);

router.delete('/:id', studentController.destroy);

module.exports = router; 