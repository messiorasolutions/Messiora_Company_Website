const Job = require('../models/Job');

exports.getJobs = async (req, res) => {
    try {
        const jobs = await Job.find().sort({ createdAt: -1 });
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.applyJob = async (req, res) => {
    try {
        const jobApp = new Job(req.body);
        await jobApp.save();
        res.status(201).json({ message: 'Application submitted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateStatus = async (req, res) => {
    try {
        const updated = await Job.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
