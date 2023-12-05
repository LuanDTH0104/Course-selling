const express = require('express');
const { getAllUsers, insertUser, getUser, deleteUser, updateUser } = require('../DAO/UserDAO');
const User = require('../Model/User');
const UserController = express.Router();
const cors = require('cors');
// Get all users from the database
UserController.get('/', (req, res) => {
  getAllUsers(req, res);
});


// Insert User to the database
UserController.options('/', cors());
UserController.post('/', cors(), (req, res) => {
  insertUser(req, res);
});

// Get specific user from the database
UserController.get('/:id', (req, res) => {
  getUser(req, res);
});
// Login request
UserController.options('/login', cors());
UserController.post('/login', cors(), (req, res) => {
  if (req.body.email && req.body.password) {
    User.findOne({ email: req.body.email, password: req.body.password }).then((user) => {
      if (user) {
        return res.status(200).json({
          data: user,
          code: 200,
          message: 'Login successfully!!!',
        });
      } else {
        return res.status(404).json({ message: 'Not found' });
      }

    }).catch((err) => {
      return res.status(404).json({ message: 'Not found' });
    });
  }
});

// Delete specific user from the database
UserController.delete('/delete/:id', (req, res) => {
  deleteUser(req, res);
});

// Update specific user from the database
UserController.put('/update/:id', (req, res) => {
  updateUser(req, res);
});


module.exports = UserController;