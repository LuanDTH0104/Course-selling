const Course = require('../models/Course');
const mongoose = require('mongoose');

function getAllCourses(req, res) {
    Course.find().then((courses) => {
        return res.json({
            data: courses,
            code: 200,
            message: 'Get all courses successfully!!!',
        });
    }).catch((err) => {
        return res.json({
            code: 400,
            error: err
        });
    });
}

//Insert course to the database
function insertCourse(req, res) {
    const course = new Course({
        _id: new mongoose.Types.ObjectId,
        courseDescription: req.body.courseDescription,
        courseName: req.body.courseName,
        coursePrice: req.body.coursePrice,
        courseImage: req.body.courseImage,
        courseVideoDemo: req.body.courseVideoDemo,
        teacherId: req.body.teacherId,
        courseCategoryId: req.body.courseCategoryId
    });

    return course.save().then((newCourse) => {
        return res.json({
            data: newCourse,
            code: 200,
            message: 'Insert course successfully!!!',
        });
    }).catch((err) => {
        return res.json({
            code: 400,
            error: err,
            message: 'Insert course fail!!!',
        });
    });
}

//Get specific course from the database
function getCourse(req, res) {
    const id = req.params.id;
    Course.findById(id).then((course) => {
        return res.status(200).json({
            data: course,
            code: 200,
            message: 'find course successfully!!!',
        });
    }).catch((err) => {
        return res.status(404).json({
            code: 404,
            message: 'Not found'
        });
    });
}

//Update specific course from the database
function updateCourse(req, res) {
    const id = req.params.id;
    Course.findByIdAndUpdate(id).then((course) => {
        return res.status(200).json({
            data: course,
            code: 200,
            message: 'update course successfully!!!',
        });
    }).catch((err) => {
        return res.status(404).json({
            code: 404,
            message: 'Not found'
        });
    }
    );
}

//Delete specific course from the database
function deleteCourse(req, res) {
    const id = req.params.id;
    Course.findByIdAndDelete(id).then(() => {
        return res.status(200).json({
            code: 200,
            message: 'delete course successfully!!!',
        });
    }).catch((err) => {
        return res.status(404).json({
            code: 404,
            message: 'Not found'
        });
    });
}

module.exports = {
    getAllCourses,
    insertCourse,
    getCourse,
    updateCourse,
    deleteCourse
};