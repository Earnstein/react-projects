import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    userId: {type:mongoose.Schema.Types.ObjectId, ref:'User'},
    comment: String,
},{
    timestamps: true
})

const Comment = mongoose.model('Product', CommentSchema);

export default Comment;

