const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UPComments = new Schema({
    _id: Schema.Types.ObjectId,
    postId: {type: Number, required: true},
    userId: {type: Number, required: true},
    comment: {type: String, required: true, max: 500},
    createdTime: {type: Date, required: true},
});


module.exports = mongoose.model('UPComments', UPComments);