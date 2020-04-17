const Food = require('../models/food.model');

const FoodController = {
    getFoods: async function getFoods(req,res) {
        try {
            const foods = await Food.find().sort({number: 1});
            return res.status(201).json(foods);
            
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    createFood: async function createFood(req,res) {
        try {
            const food = new Food({
                number: req.body.number,
                name: req.body.name,
                description: req.body.description,
                price: req.body.price
            })

            await food.save();

            return res.status(201).json({food});
            
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    }
}

module.exports = FoodController