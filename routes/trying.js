var express = require('express');
var router  = express.Router();

var trying_controller = require('../controllers/trying_controller');

router.get('/', trying_controller.index);

module.exports = router;