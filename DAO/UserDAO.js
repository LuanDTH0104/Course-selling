const mongoose = require('mongoose');
const User = require('../Model/User');


function getAllUsers(req, res) {
    User.find().then((User) => {
        return res.json({
            data: User,
            code: 200,
            message: 'Get all users successfully!!!',
        });
    }).catch((err) => {
        return res.json({
            code: 400,
            error: err
        });
    });
}

function insertUser(req, res) {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        phone: req.body.phone,
        address: req.body.address,
        avatar: req.body.avatar,
        courseId: req.body.courseId,

    });

    return user.save().then((newUser) => {
        return res.json({
            data: newUser,
            code: 200,
            message: 'Insert user successfully!!!',
        });
    }).catch((err) => {
        return res.json({
            code: 400,
            error: err,
            message: 'Insert user fail!!!',
        });
    });
}

function getUser(req, res) {
    const id = req.params.id;
    User.findById(id).then((user) => {
        return res.status(200).json({
            data: user,
            code: 200,
            message: 'find user successfully!!!',
        });
    }).catch((err) => {
        return res.status(404).json({ message: 'Not found' });
    });
}

function updateUser(req, res){
    const id = req.params.id;
    User.findByIdAndUpdate(id, req.body).then((user) => {
        return res.status(200).json({
            code: 200,
            message: 'Update user successfully!!!',
        });
    }).catch((err) => {
        return res.status(404).json({ 
            message: 'Not found',
            error: err });
    });
}


function deleteUser(req, res){
    const id = req.params.id;
    User.findByIdAndDelete(id).then((user) => {
        return res.status(200).json({
            code: 200,
            message: 'Delete user successfully!!!',
        });
    }).catch((err) => {
        return res.status(404).json({ 
            message: 'Not found',
            error: err });
    });
}




module.exports = { getAllUsers, insertUser, getUser, updateUser, deleteUser };