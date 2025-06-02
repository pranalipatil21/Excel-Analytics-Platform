const mongoose = require('mongoose');

const userShecma = new mongoose.Schema({
    name: String,
    email: {type: String, uinque: true},
    password: String,
    role:{type: String, enum: ['user', 'admin'], default: 'user'}
});

module.exports = mongoose.model('User', userShecma);