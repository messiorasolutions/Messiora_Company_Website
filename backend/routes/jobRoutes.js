const express = require('express');
const router = express.Router();
const { getJobs, applyJob, updateStatus } = require('../controllers/jobController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
    .get(protect, getJobs)
    .post(applyJob);

router.route('/:id/status')
    .put(protect, updateStatus);

module.exports = router;
