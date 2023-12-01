const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Post = new Schema({
    _id: Schema.Types.ObjectId,
    teacherId: {type: Number, required: true},
    postTitle: {type: String, required: true, max: 400},
    postContent: {type: String, required: true},
    createdTime: {type: Date, required: true},
});


module.exports = mongoose.model('Post', Post);