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
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }, 
    register_date: {
        type: Date,
        default: Date.now
    }
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food; 