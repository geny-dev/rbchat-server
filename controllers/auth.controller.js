require('dotenv').config()
var jwt = require('jsonwebtoken');
var User = require('../models/user.model');

async function login(req, res) {
  const { username, password } = req.body;
  const user = await User.findOne({ user_name: username });
  if (user && password == user.password) {
    const auth_info = {
      user_id: user.user_id
    };
    const token = jwt.sign(auth_info, process.env.SECRET_KEY, { algorithm: 'HS256', expiresIn: '7d' });
    res.status(200).json({
      user_id: user.user_id,
      token: token
    });
  }
  else {
    res.status(200).json({
      "message": "Username and password are invalid. Please enter correct username and password"
    });
  }
}

module.exports = {login};