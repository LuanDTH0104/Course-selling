const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UCComments = new Schema({
    _id: Schema.Types.ObjectId,
    courseId: {type: Number, required: true},
    userId: {type: Number, required: true},
    rating: {type: Number, required: true, max: 5},
    comment: {type: String, required: true, max: 500},
    createdTime: {type: Date, required: true}
});


module.exports = mongoose.model('UCComments', UCComments);