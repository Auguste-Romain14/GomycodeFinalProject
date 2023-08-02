var express = require('express');
var router = express.Router();
const coefficientController = require('../controllers/coefficientControlleur');

router.get('/', coefficientController.index);

router.get('/:id', coefficientController.find);

router.post('/', coefficientController.store);

router.put('/:id', coefficientController.update);

router.delete('/:id', coefficientController.destroy);

module.exports= router;