const mongoose = require('mongoose');
const validator = require('validator');

const orderSchema = new mongoose.Schema({
    food: [{
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Food'
        },
        amount: {
            type: Number,
            required: true,
            default: 1
        }
    }],
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
    },
    price: {
        type: Number
    }, 
    register_date: {
        type: Date,
        default: Date.now
    }
});

orderSchema.post('save', async function (doc, next) {
     await doc.populate({
                path: 'food._id',
                model: 'Food'
            }).execPopulate(function() {
        next();
    });
});


const Order = mongoose.model('Order', orderSchema);

module.exports = Order; 