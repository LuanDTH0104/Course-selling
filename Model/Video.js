const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Video = new Schema({
    _id: Schema.Types.ObjectId,
    videoName: { type: String, required: true, max: 200 },
    videoUrl: { type: String, required: true, max: 400 },
    courseId: { type: Number, required: true },
    videoDescription: { type: String, required: true, max: 2000 },
    createdTime: { type: Date, required: true },
});


module.exports = mongoose.model('Video', Video);