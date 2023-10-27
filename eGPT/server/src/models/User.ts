import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    comment: [{type: mongoose.Schema.Types.ObjectId
    , ref: "Comment"}]
}, {
    timestamps: true
})

const User = mongoose.model('Product', UserSchema);

export default User;

