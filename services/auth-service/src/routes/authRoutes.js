const express = require('express');
const { register, login, getUsers } = require('../controllers/authController');
const { verifyToken, checkRole } = require('../middlewares/authMiddleware');

const router = express.Router();

// Open: POST /register
router.post('/register', register);

// Open: POST /login
router.post('/login', login);

// Admin: GET /users
router.get('/users', verifyToken, checkRole(['admin']), getUsers);

module.exports = router;
