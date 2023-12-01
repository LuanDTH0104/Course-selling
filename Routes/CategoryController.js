const express = require('express');
const { getAllCategories, insertCategory, getCategory, deleteCategory } = require('../DAO/CategoryDAO');
const CategoryController = express.Router();

CategoryController.get('/', (req, res) => {
    getAllCategories(req, res);
});



CategoryController.post('/', (req, res) => {
    insertCategory(req, res);
});


CategoryController.get('/:id', (req, res) => {
    getCategory(req, res);  
});


CategoryController.put('/update/:id', (req, res) => {
    updateCategory(req, res);
});

CategoryController.delete('/delete/:id', (req, res) => {
    deleteCategory(req, res);   
});


module.exports = CategoryController;