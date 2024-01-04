const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        title: String,
        content: String,
        postNum: Number,
        image: {
            type: Array,
            default: []
        },
        // User.js 값 가져오기
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        repleNum: {
            type: Number,
            default: 0,
        }
    },
    { collection: "posts" }
);

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };