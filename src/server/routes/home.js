const express = require('express');
const router = express.Router();
const { showHomePage } = require('../home/homeController');

router.get('/', showHomePage);

module.exports = router;
