const express = require('express');
const auth = require('../middleware/auth')
const router = new express.Router();

const UserController = require('../controllers/user.controller');


//Create user in DB + REST API
router.post('/', UserController.createUser);
//Login user
router.post('/login', UserController.loginUser);
//Logout user
router.post('/me/logout', auth, UserController.logoutUser);
//Logout All Tokens
router.post('/me/logoutAll', auth, UserController.logoutAll);
//User Progile API
router.get('/me', auth, UserController.userProfile);
//UPRADE User Profile
router.patch('/me', auth, UserController.updateProfile);
//DELETE User Profile
router.delete('/me', auth, UserController.deleteUser);


module.exports = router;