const express = require('express');
const auth = require('../middleware/auth')
const router = new express.Router();

const {
    createUser,
    loginUser,
    logoutUser,
    logoutAll,
    userProfile,
    updateProfile,
    deleteUser,
    createFavoriteRecipe,
    removeFavoriteRecipe
} = require('../controllers/user.controller');


//Create user in DB + REST API
router.post('/', createUser);
//Login user
router.post('/login', loginUser);
//Logout user
router.post('/me/logout', auth, logoutUser);
//Logout All Tokens
router.post('/me/logoutAll', auth, logoutAll);
//User Progile API
router.get('/me', auth, userProfile);
//UPRADE User Profile
router.patch('/me', auth, updateProfile);
//DELETE User Profile
router.delete('/me', auth, deleteUser);


module.exports = router;