'use strict';

var express = require('express');
var controller = require('./geturl.controller');

var router = express.Router();

router.get('/', controller.getHtmlByUrl);

module.exports = router;