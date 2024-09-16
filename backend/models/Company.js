const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  name: { type: String, required: true },
  logo: { type: String }, // URL of the logo image
  description: { type: String },
  applications: [{
    applicant_name: { type: String },
    email: { type: String },
    resume: { type: mongoose.Schema.Types.ObjectId, ref: 'Resume' }
  }],
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Company', CompanySchema);
