require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');
const Admin = require('../models/Admin');

const createAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        const username = 'admin';
        const password = 'password123';

        const existingAdmin = await Admin.findOne({ username });
        if (existingAdmin) {
            console.log('Admin already exists. Updating password...');
            existingAdmin.password = password;
            await existingAdmin.save();
            console.log('Admin password updated successfully.');
        } else {
            const newAdmin = new Admin({ username, password });
            await newAdmin.save();
            console.log('Admin created successfully.');
        }

        console.log('-------------------------');
        console.log(`Username: ${username}`);
        console.log(`Password: ${password}`);
        console.log('-------------------------');

        process.exit();
    } catch (error) {
        console.error('Error creating admin:', error.message);
        process.exit(1);
    }
};

createAdmin();
