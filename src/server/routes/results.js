const express = require('express');
const router = express.Router();
const { showResultsPage } = require('../resumes/resumeController');

router.get('/', showResultsPage);

module.exports = router;
