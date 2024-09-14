const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    needs: [{ type: String, required: true }],
    location: { type: String },
    contactEmail: { type: String, required: true }
});

const Organization = mongoose.model('Organization', organizationSchema);
module.exports = Organization;
