const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    category: {
        type: String,
        required: true
    }
});

const Ingredient = mongoose.model('ingredient', ingredientSchema);

module.exports = Ingredient; 