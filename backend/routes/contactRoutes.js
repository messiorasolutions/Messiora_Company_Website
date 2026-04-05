const express = require('express');
const router = express.Router();
const { getContacts, createContact, markAsRead } = require('../controllers/contactController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
    .get(protect, getContacts)
    .post(createContact);

router.route('/:id/read')
    .put(protect, markAsRead);

module.exports = router;
