const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    jobTitle: { type: String, required: true },
    applicantName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    cvUrl: { type: String, required: true }, // The path to the uploaded file
    status: { type: String, enum: ['Pending', 'Reviewed', 'Rejected'], default: 'Pending' }
}, { timestamps: true });

module.exports = mongoose.model('JobApplication', jobSchema);
