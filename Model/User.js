const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
    _id:                Schema.Types.ObjectId,
    email:           {type: String, required: true,  unique: true, max: 50},
    username:   {type: String, required: true,  unique: true, max: 20},
    password:    {type: String, required: true, max: 20},
    phone:          {type: String, required: true, max: 12},   
    address:       {type: String, required: true, max: 100},
    avatar:          {type: String, required: false, max: 400 },
    courseId:      {type: Array},
});





module.exports = mongoose.model('User', User);