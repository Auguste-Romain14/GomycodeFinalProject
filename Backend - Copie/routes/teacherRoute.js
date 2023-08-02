var express = require('express');
var router = express.Router();
const teacherController = require('../controllers/teacherController');

router.get('/', teacherController.index);

router.get('/:id', teacherController.find);

router.post('/', teacherController.store);

router.put('/:id', teacherController.update);

router.delete('/:id', teacherController.destroy);

module.exports = router;