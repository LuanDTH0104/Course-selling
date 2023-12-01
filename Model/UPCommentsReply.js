const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UPCommentsReply = new Schema({
    _id: Schema.Types.ObjectId,
    UPCommentsId: {type: Number, required: true},
    replidUserId: {type: Number, required: true},
    userId: {type: Number, required: true},
    comment: {type: String, required: true, max: 500},
    createdTime: {type: Date, required: true}
});


module.exports = mongoose.model('UPCommentsReply', UPCommentsReply);