const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    ingredients: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'ingredient'
    }],
    price: {
        type: Number,
        required: true
    }, 
    description: {
        type: String,
        default: ''
    },
});

const Food = mongoose.model('food', foodSchema);

module.exports = Food; 