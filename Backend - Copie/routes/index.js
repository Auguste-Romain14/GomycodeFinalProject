var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 
 res.status(200).json({ title: 'Express', data: {name: "Achile"}, arr: ["orange", "mangue"] })
});

router.post('/', function(req, res, next) {
  res.status(200).json({success: true});
});

module.exports = router;
 