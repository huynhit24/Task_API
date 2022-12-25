const express = require('express');
const router = express.Router();
const auth_jwt = require('../middleware/verifyToken');
const userController = require("../controllers/userController");

// desc    Get info User
// method GET
router.get('/', auth_jwt, userController.getUser);

// desc    Register user
// method POST
router.post('/register', userController.registerUser);

// desc    User login
// method POST
router.post('/login', userController.loginUser);

module.exports = router;
