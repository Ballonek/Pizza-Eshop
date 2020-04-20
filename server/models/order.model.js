const mongoose = require('mongoose');
const validator = require('validator');

const orderSchema = new mongoose.Schema({
    register_date: {
        type: Date,
        default: Date.now,
        required: true
    },
    number: {
        type: Number,
        required: true,
        unique: true
    },
    foods: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'food',
        required: true
    }, {
        amount: {
            type: Number,
            required: true,
            default: 0
        }
    }],
    customer: {
        firstname: {
            type: String
        },
        lastname: {
            type: String
        },
        email: {
            type: String,
            validate: validator.isEmail
        },
        address: {
            city: {
                type: String,
            },
            street: {
                type: String,
            }
        }},
    price: {
        type: Number,
        required: true,
        default: 0
    }, 
});


const Order = mongoose.model('order', orderSchema);

module.exports = Order; 