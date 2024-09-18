const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// POST: Register user
router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;

    // Ensure required fields are provided
    if (!firstName || !lastName || !email || !password || !role) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create and save new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ firstName, lastName, email, password: hashedPassword, role });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: 'Error registering user', error: err });
  }
});

// POST: Login user
router.post('/login', async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Ensure required fields are provided
    if (!email || !password || !role) {
      return res.status(400).json({ message: 'Email, password, and role are required' });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Optionally: Check role if needed for additional validation
    if (user.role !== role) {
      return res.status(400).json({ message: 'Role mismatch' });
    }

    // Respond with success
    res.status(200).json({ message: 'Login successful', role: user.role });
  } catch (err) {
    res.status(400).json({ message: 'Error logging in', error: err });
  }
});

module.exports = router;
