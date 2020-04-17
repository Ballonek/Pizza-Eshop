const express = require('express');
const auth = require('../middleware/auth')
const router = new express.Router();

const {
    getOrders,
    createOrder
} = require('../controllers/order.controller');


//Create user in DB + REST API
router.get('/', getOrders);
router.post('/', createOrder);



module.exports = router;