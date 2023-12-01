const express = require('express');
const PostController = express.Router();

const { getAllPost, insertPost, getSpecificPost } = require('../DAO/PostDAO');

// Get all posts from the database
PostController.get('/', (req, res) => {
    getAllPost(req, res);
});

// Insert post to the database
PostController.post('/', (req, res) => {
    insertPost(req, res);
});

// Get specific post from the database
PostController.get('/:id', (req, res) => {
    getSpecificPost(req, res);
});

// Update specific post from the database
PostController.put('/update/:id', (req, res) => {
    updatePost(req, res);
});

// Delete specific post from the database
PostController.delete('/delete/:id', (req, res) => {
    deletePost(req, res);
});

module.exports = PostController;