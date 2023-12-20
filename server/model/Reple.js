const mongoose = require("mongoose");

const repleSchema = new mongoose.Schema(
    {
        reple: String,
        // User.js 값 가져오기
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        // 해당되는 포스트의 댓글만 가져오기
        postId: {
            type: mongoose.Schema.Types.ObjectId,
        },
    },
    { collection: "reples" }
);

const Reple = mongoose.model("Reple", repleSchema);

module.exports = { Reple };