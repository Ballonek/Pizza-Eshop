const express = require('express');
const auth = require('../middleware/auth')
const router = new express.Router();

const {
    getIngredients,
    createIngredient,
    deleteIngredient,
    updateIngredient
} = require('../controllers/ingredient.controller');


//Create user in DB + REST API
router.get('/', getIngredients);
router.post('/', createIngredient);
router.patch('/:id', updateIngredient);
router.delete('/:id', auth, deleteIngredient);



module.exports = router;