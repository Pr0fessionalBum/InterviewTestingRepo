const express = require('express');
const { showResumes, archiveResume, unarchiveResume } = require('../resumes/resumeController');

const router = express.Router();

router.get('/', showResumes);
router.post('/:id/archive', archiveResume);
router.post('/:id/unarchive', unarchiveResume);

module.exports = router;
