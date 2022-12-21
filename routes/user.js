const express = require('express');
const router = express.Router();
const auth_jwt = require('../middleware/auth_jwt');
const userController = require("../controllers/userController");


router.get('/', auth_jwt, userController.getUser);

router.post('/register', userController.registerUser);

router.post('/login', userController.loginUser);

module.exports = router;
