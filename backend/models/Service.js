const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, default: 'Custom Pricing' },
    icon: { type: String } // String to store simple icon name or URL
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);
