const Category = require('../Model/Category');
const mongoose = require('mongoose');

function getAllCategories(req, res) {
    Category.find().then((Category) => {
        return res.json({
            data: Category,
            code: 200,
            message: 'Get all categories successfully!!!',
        });
    }).catch((err) => {
        return res.json({
            code: 400,
            error: err
        });
    });
}


// Insert Category to the database
function insertCategory(req, res) {
    const category = new Category({
        _id: new mongoose.Types.ObjectId(),
        categoryName: req.body.categoryName,
    });

    return category.save().then((newCategory) => {
        return res.json({
            data: newCategory,
            code: 200,
            message: 'Insert category successfully!!!',
        });
    }).catch((err) => {
        return res.json({
            code: 400,
            error: err,
            message: 'Insert category fail!!!',
        });
    });
}

// Get specific category from the database
function getCategory(req, res) {
    const id = req.params.id;
    Category.findById(id).then((category) => {
        return res.status(200).json({
            data: category,
            code: 200,
            message: 'find category successfully!!!',
        });
    }).catch((err) => {
        return res.status(404).json({ message: 'Not found' });
    });
}

// Update specific category from the database
function updateCategory(req, res) {
    const id = req.params.id;
    Category.findByIdAndUpdate(id).then((category) => {
        return res.status(200).json({
            data: category,
            code: 200,
            message: 'update category successfully!!!',
        });
    }).catch((err) => {
        return res.status(404).json({ message: 'Not found' });
    }
    );
}

// Delete specific category from the database
function deleteCategory(req, res) {
    const id = req.params.id;
    Category.findByIdAndDelete(id).then(() => {
        return res.status(200).json({
            code: 200,
            message: 'delete category successfully!!!',
        });
    }).catch((err) => {
        return res.status(404).json({ message: 'Not found' });
    });
}


module.exports = {getAllCategories, insertCategory, getCategory, updateCategory, deleteCategory};