var express = require('express');
var router  = express.Router();

var drone_controller = require('../controllers/drone_controller');

router.get('/', drone_controller.index);

module.exports = router;