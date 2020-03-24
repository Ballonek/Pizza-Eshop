const config = require('config');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const auth = async (req, res, next) => {
  try {

    if (!req.header('Authorization')) throw Error('No token provided'); 

    const token = req.header('Authorization').replace('Bearer ', '');

    // Check for token
    if (!token){
      throw Error('No token, authorizaton denied' );
    }
    // Verify token
    const decoded = await jwt.verify(token, config.get('jwtSecret'));

    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

    if (!user) {
      throw new Error('No user found!');
    }

    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ msg: error.message });
  }
}

module.exports = auth;