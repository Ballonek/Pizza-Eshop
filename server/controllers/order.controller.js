const Order = require('../models/order.model');

const orderController = {
    getOrders: async function getOrders(req, res) {
        try {
            const orders = await Order.find().sort({ register_date: 1 }).populate({
                path: 'food.orderFood',
                model: 'Food'
            });
            return res.status(201).json(orders);
            
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    getOrderById: async function getOrderById(req, res) {
        try {
            
            
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    createOrder: async function createorder(req,res) {
        try {
            const order = new Order({
                food: req.body.food,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                address: req.body.address,
                price: req.body.price
            })
            await order.save();

            await order.populate({
                path: 'food.orderFood',
                model: 'Food'
            })

            return res.status(201).json(order);
            
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    }
}

module.exports = orderController