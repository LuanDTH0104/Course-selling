const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Quiz = new Schema({
    _id: Schema.Types.ObjectId,
    videoId: {type: Number, required: true},
    quizQues: {type: String, required: true, max: 400},
    quizAnswer: {type: String, required: true},
    quizTime: {type: TimeRanges, required: true},
});


module.exports = mongoose.model('Post', Post);