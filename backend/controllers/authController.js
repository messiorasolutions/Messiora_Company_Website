const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || 'fallback_secret', {
        expiresIn: '30d',
    });
};

const loginAdmin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await Admin.findOne({ username });
        if (admin && (await admin.matchPassword(password))) {
            res.json({
                _id: admin._id,
                username: admin.username,
                token: generateToken(admin._id),
            });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const initAdmin = async (req, res) => {
    try {
        const count = await Admin.countDocuments();
        if (count > 0) {
            return res.status(400).json({ message: 'Admin already initialized' });
        }
        const admin = new Admin({ username: 'admin', password: 'password123' });
        await admin.save();
        res.status(201).json({ message: 'Admin initialized successfully with default credentials' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { loginAdmin, initAdmin };
