const {} = require('../DAO/CourseDAO');
const mongoose = require('mongoose');
const express = require('express');
const CourseController = express.Router();

//Get all courses from the database
CourseController.get('/', (req, res) => {
    getAllCourses(req, res);
});

//Insert course to the database
CourseController.post('/', (req, res) => {
    insertCourse(req, res);
});

//Get specific course from the database
CourseController.get('/:id', (req, res) => {
    getCourse(req, res);
});

//Update specific course from the database
CourseController.put('/update/:id', (req, res) => {
    updateCourse(req, res);
});

//Delete specific course from the database
CourseController.delete('/delete/:id', (req, res) => {
    deleteCourse(req, res);
});
