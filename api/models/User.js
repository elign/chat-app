const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
    username: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
    email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
    password: String,
}, {timestamps: true});

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;