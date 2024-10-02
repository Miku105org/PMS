const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

router.post('/api/auth/register', register);
router.post('/api/auth/login', login);

module.exports = router;
