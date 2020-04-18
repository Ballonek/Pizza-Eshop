const express = require('express');
const auth = require('../middleware/auth')
const router = new express.Router();

const {
    getFoods,
    createFood,
    deleteFood
} = require('../controllers/food.controller');


//Create user in DB + REST API
router.get('/', getFoods);
router.post('/', auth, createFood);
router.delete('/:id', auth, deleteFood);



module.exports = router;