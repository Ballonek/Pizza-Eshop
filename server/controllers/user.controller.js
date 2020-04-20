const User = require('../models/user.model');

const UserController = {
    createUser: async function createUser(req, res) {
        try {
            const user = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
            });
            await user.save();
            const token = await user.generateAuthToken();


            return res.status(201).json({ user, token });
            
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    loginUser: async function loginUser(req, res) {
        try {
            const user = await User.findByCredentials(req.body.email, req.body.password);
            const token = await user.generateAuthToken();
            res.status(200).send({ user, token });
        } catch (error) {
            res.status(400).send({ msg: error.message });
        }
    },
    logoutUser: async function logoutUser(req, res) {
        try {
            req.user.tokens = req.user.tokens.filter((token) => {
                return token.token !== req.token
            });

            await req.user.save();
            res.status(200).json({ msg: "User succesfully logged out" });
        } catch (e) {
            res.status(500).json();
        }
    },
    logoutAll: async function logoutAll(req, res) {
        try {
            req.user.tokens = []
            await req.user.save()
            res.send()
        } catch (e) {
            res.status(500).send()
        }
    },
    userProfile: async function userProfile(req, res) {
        user = req.user;
        res.status(200).json(user);
    },
    updateProfile: async function updateProfile(req, res) {
        const updates = Object.keys(req.body)
        const allowedUpdates = ['name', 'email', 'password', 'age']
        const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    
        if (!isValidOperation) {
            return res.status(400).send({ error: 'Invalid updates!' })
        }
    
        try {
            updates.forEach((update) => req.user[update] = req.body[update])
            await req.user.save()
            res.send(req.user)
        } catch (e) {
            res.status(400).send(e)
        }
    },
    deleteUser: async function deleteUser(req, res) {
        try {
            await req.user.remove()
            res.json({ msg: "User succesfully deleted!" })
        } catch (e) {
            res.status(500).send()
        }
    }
}
    
module.exports = UserController