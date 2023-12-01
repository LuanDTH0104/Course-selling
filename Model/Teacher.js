;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Teacher = new Schema({
    _id: Schema.Types.ObjectId,
    email: {type: String, required: true, max: 50},
    username: {type: String, required: true, max: 20},
    password: {type: String, required: true, max: 20},
    phone: {type: String, required: true, max: 12},
    address: {type: String, required: false, max: 100},
    avatar: {type: String, required: false, max: 400},
    description: {type: String, required: false, max: 1000},
});


module.exports = mongoose.model('Teacher', Teacher);