const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async(requestAnimationFrame, res) => {
    const {name, email, password,role} = requestAnimationFrame.body;
}