const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// const DB= 'mongodb+srv://priyanshbhatt2003:<miku105>@cluster0.0ra9z.mongodb.net/placement?retryWrites=true&w=majority&appName=Cluster0'
const DB  = `mongodb+srv://priyansh2003:miku105@cluster0.0ra9z.mongodb.net/placement`
// Import routes
const authRoutes = require('./routes/auth');
const resumeRoutes = require('./routes/resume');
const companyRoutes = require('./routes/company');

// Initialize Express app
const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// Connect to MongoDB

mongoose.connect(DB, {
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true,
  // useFindAndModify: false
}
).then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

// Route handlers
app.use('/api/v1/auth', authRoutes); // Authentication routes
app.use('/api/v1/resume', resumeRoutes); // Resume management routes
app.use('/api/companies', companyRoutes); // Company-related routes

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
