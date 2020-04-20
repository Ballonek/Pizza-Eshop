const Ingredient = require('../models/Ingredient.model');

const IngredientController = {
    getIngredients: async function getIngredients(req,res) {
        try {
            const ingredients = await Ingredient.find();
            return res.status(201).json(ingredients);
            
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    createIngredient: async function createIngredient(req,res) {
        try {
            const ingredient = new Ingredient({
                name: req.body.name,
                category: req.body.category,
                price: req.body.price
            })

            await ingredient.save();

            return res.status(201).json(ingredient);
            
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    deleteIngredient: async function deleteIngredient(req, res) {
        try {
            const ingredient = await Ingredient.findById(req.params.id);
            
            ingredient.remove();
            res.status(204).json({ mgs: "Ingredient succesfully deleted"})
        } catch (e) {
            res.status(500).json({ mgs: `Something went wrong ${e}`})
        }
    },
    updateIngredient: async function updateProfile(req, res) {
        const updates = Object.keys(req.body);
        const allowedUpdates = ['name', 'price'];
        const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

        try {
            if (isValidOperation) {
                const ingredient = await Ingredient.findByIdAndUpdate(req.params.id, req.body)
                res.status(201).json(ingredient);
            }

            
        } catch (error) {
            
        }
    
        
    }
}

module.exports = IngredientController