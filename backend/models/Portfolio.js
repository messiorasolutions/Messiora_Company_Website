const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    category: { type: String, enum: ['Web Development', 'Mobile App Development', 'UI/UX Design', 'AI Solutions', 'Cloud / DevOps'], required: true },
    projectUrl: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Portfolio', portfolioSchema);
