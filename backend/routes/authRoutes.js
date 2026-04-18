const express = require('express');
const router = express.Router();
const { loginAdmin, initAdmin } = require('../controllers/authController');

router.post('/login', loginAdmin);
router.post('/init', initAdmin); // Run once to setup admin

module.exports = router;
