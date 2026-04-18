const express = require('express');
const router = express.Router();
const upload = require('../middleware/multerConfig');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, upload.single('file'), (req, res) => {
    res.json({ url: `/uploads/${req.file.filename}` });
});

router.post('/cv', upload.single('cv'), (req, res) => {
    res.json({ url: `/uploads/${req.file.filename}` });
});

module.exports = router;
