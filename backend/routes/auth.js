const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const saltRounds = 10; // Number of salt rounds for bcrypt

// POST: Register user
router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;

    console.log("fi " ,firstName, lastName, email, password, role )

    // Ensure required fields are provided
    if (!firstName || !lastName || !email || !password || !role) {
      console.log("Missing fields during registration");
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists:", email);
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log("Plain password:", password);
    console.log("Hashed password (stored in DB):", hashedPassword);

    // Create a new user with the hashed password
    const newUser = new User({ firstName, lastName, email, password: hashedPassword, role });
    await newUser.save();

    console.log("User registered successfully:", { email, role });
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error("Error registering user:", err.message);
    res.status(500).json({ message: 'Error registering user', error: err.message });
  }
});

// POST: Login user
router.post('/login', async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Ensure all required fields are present
    if (!email || !password || !role) {
      console.log("Missing fields during login");
      return res.status(400).json({ message: 'Email, password, and role are required' });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found:", email);
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Log user details and entered password for debugging
    console.log("Found user:", { email: user.email, storedPassword: user.password, role: user.role });
    console.log("Entered password during login:", password);

    // Compare the entered password with the stored hashed password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    console.log("Password match status:", isPasswordMatch);

    if (!isPasswordMatch) {
      console.log("Password mismatch for user:", email);
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check role
    if (user.role !== role) {
      console.log("Role mismatch for user:", email);
      return res.status(400).json({ message: 'Role mismatch' });
    }

    console.log("User logged in successfully:", email);
    res.status(200).json({ message: 'Login successful', role: user.role });
  } catch (err) {
    console.error("Error logging in:", err.message);
    res.status(500).json({ message: 'Error logging in', error: err.message });
  }
});

module.exports = router;
