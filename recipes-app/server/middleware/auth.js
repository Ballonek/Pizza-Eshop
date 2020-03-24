const config = require('config');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');

    // Check for token
    if (!token){
      return res.status(401).json({ msg: 'No token, authorizaton denied' });
    }
    // Verify token
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

    if (!user) {
      throw new Error('No user found!');
    }

    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(400).json({ msg: 'Token is not valid' });
  }
}

module.exports = auth;