const express = require('express');
const router = express.Router();
const Resume = require('../models/Resume');

// POST: Add new resume
router.post('/add', async (req, res) => {
  try {
    const newResume = new Resume(req.body);
    await newResume.save();
    res.status(201).json(newResume);
  } catch (err) {
    res.status(400).json({ message: 'Error creating resume', error: err });
  }
});

// GET: Get all resumes
router.get('/all', async (req, res) => {
  try {
    const resumes = await Resume.find();
    res.status(200).json(resumes);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching resumes', error: err });
  }
});

module.exports = router;
