const express = require('express');
const router = express.Router();
const Company = require('../models/Company');

// GET: List all companies
router.get('/all', async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching companies', error: err });
  }
});

// POST: Apply for a company
router.post('/:id/apply', async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) return res.status(404).json({ message: 'Company not found' });

    company.applications.push(req.body);
    await company.save();
    res.status(200).json(company);
  } catch (err) {
    res.status(400).json({ message: 'Error applying', error: err });
  }
});

module.exports = router;
