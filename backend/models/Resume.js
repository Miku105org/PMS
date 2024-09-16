const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  skills: { type: [String], required: true },
  experience: { type: String },
  projects: { type: [String] },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Resume', ResumeSchema);
