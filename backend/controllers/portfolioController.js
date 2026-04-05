const Portfolio = require('../models/Portfolio');

exports.getPortfolio = async (req, res) => {
    try {
        const projects = await Portfolio.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createPortfolio = async (req, res) => {
    try {
        const project = new Portfolio(req.body);
        const savedProject = await project.save();
        res.status(201).json(savedProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updatePortfolio = async (req, res) => {
    try {
        const updated = await Portfolio.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deletePortfolio = async (req, res) => {
    try {
        await Portfolio.findByIdAndDelete(req.params.id);
        res.json({ message: 'Project removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
