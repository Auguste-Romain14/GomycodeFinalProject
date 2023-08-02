var express = require('express');
var router = express.Router();
const uploadController = require('../controllers/uploadController')

/* GET home page. */
router.post('/', uploadController.store);

module.exports = router; 