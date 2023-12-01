const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Courses = new Schema({
    _id: Schema.Types.ObjectId,
    courseDescription: {type: String, required: true, max: 1000},
    courseName: {type: String, required: true, max: 200},
    coursePrice: {type: Number, required: true},
    courseImage: {type: String, required: true, max: 400},
    courseVideoDemo: {type: String, required: true, max: 400},
    teacherId: {type: Number, required: true},
    courseCategoryId: {type: Number, required: true}
});


module.exports = mongoose.model('Courses', Courses);