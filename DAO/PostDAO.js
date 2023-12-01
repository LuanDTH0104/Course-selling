const Post = require("../Model/Post");
const mongoose = require("mongoose");
function getAllPost(req, res) {
    Post.find().then((posts) => {
        return {
            data: posts,
            status: 200,
            message: "Get all posts successfully"
        }
    }
    ).catch((err) => {
        return {
            data: null,
            status: 400,
            message: "Get all posts failed"
        }
    })
}


function insertPost(req, res) {
    const post = {
        _id: new mongoose.Types.ObjectId(),
        teacherId: req.body.teacherId,
        postTitle: req.body.postTitle,
        postContent: req.body.postContent,
        createdTime: req.body.createdTime,
    }

    return post.save().then((newPost) => {
        return {
            data: newPost,
            status: 200,
            message: "Insert post successfully"
        }
    }).catch((err) => {
        return {
            data: null,
            status: 400,
            message: "Insert post failed"
        }
    })
}


function getSpecificPost(req, res){
    const id = req.params.id;
    Post.findById(id).then((post) => {
        return {
            data: post,
            status: 200,
            message: "Get specific post successfully"
        }
    }).catch((err) => {
        return {
            data: null,
            status: 400,
            message: "Get specific post failed"
        }
    })
}

function updatePost(req, res){
    const id = req.params.id;
    Post.findByIdAndUpdate(id).then((post) => {
        return {
            status: 200,
            message: "Update post successfully"
        }
    }).catch((err) => {
        return {
            status: 400,
            message: "Update post failed"
        }
    });
}

function deletePost(){
    const id = req.params.id;
    Post.findByIdAndDelete(id).then((post) => {
        return {
            status: 200,
            message: "Delete post successfully"
        }
    }).catch((err) => {
        return {
            status: 400,
            message: "Delete post failed",
            error: err
        }
    });
}