const Food = require('../models/food.model');

const FoodController = {
    getFoods: async function getFoods(req,res) {
        try {
            const foods = await Food.find().populate({ path: 'ingredients', model: 'ingredient' }).sort({ number: 1 });
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
                category: req.body.category,
                ingredients: req.body.ingredients,
                description: req.body.description,
                price: req.body.price
            })

            await food.save();

            return res.status(201).json(food);
            
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    deleteFood: async function (req, res) {
        try {
            const food = await Food.findById(req.params.id);
            
            food.remove();
            res.status(204).json({ mgs: "Food succesfully deleted"})
        } catch (e) {
            res.status(500).json({ mgs: `Something went wrong ${e}`})
        }
    },
}

module.exports = FoodController