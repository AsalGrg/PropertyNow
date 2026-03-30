const express = require('express')
const authController = require ('../controllers/auth.controller')

// creating a router
const router = express.Router();

// API for registring user
router.post('/register',authController.registerUser)
router.post('/login', authController.loginUser)
router.get('/user', authController.getCurrentUserData)
module.exports= router