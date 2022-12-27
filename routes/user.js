const express = require('express');
const router = express.Router();
const auth_jwt = require('../middleware/verifyToken');
const userController = require("../controllers/userController");

// Get info User
// method GET
router.get('/', auth_jwt, userController.getUser);

// Register user
// method POST
router.post('/register', userController.registerUser);

// User login
// method POST
router.post('/login', userController.loginUser);

// update User
// method PUT
router.put('/:id', auth_jwt, userController.updateUser);

module.exports = router;
