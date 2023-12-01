const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Category = new Schema({
    _id: Schema.Types.ObjectId,
    categoryName: {type: String, required: true, max: 200}
});


module.exports = mongoose.model('Category', Category);