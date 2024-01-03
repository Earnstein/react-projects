import mongoose from "mongoose";
import { randomUUID } from "crypto";
const chatSchema = new mongoose.Schema({
    _id: {
        type:String,
        default: randomUUID(),
    },
    role: {
        type: String,
        required: true,
        enum: ["system", "user"],
    },
    content: {
        type:String,
        required: true,
    }
});

export default chatSchema;