import {Schema, model, Document} from "mongoose";
import chatSchema from "./chats.mongo.js";
import bcrypt from "bcrypt";
import { DEFAULT_MESSAGE } from "../../utils/constants.js"


interface UserChat {
  role: string;
  content: string;
}

interface User extends Document{
  name:string,
  email: string,
  password:string,
  chats: UserChat[],
  hasReceivedDefaultMessage: boolean
}

const userSchema = new Schema<User>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  chats:{
    type: [chatSchema]
  },
  hasReceivedDefaultMessage: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre("save", async function (next){
  try {
    // Only hash the password if it is modified (or new)
    if (this.isModified("password")) {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
    }

    // Initialize default message if the document is new and hasn't received it yet
    if (this.isNew && !this.hasReceivedDefaultMessage) {
      this.chats.push(DEFAULT_MESSAGE);
      this.hasReceivedDefaultMessage = true;
    }

    // Continue with the save operation
    next();
  } catch (error) {
    // Handle hashing errors
    next(error);
  }
})
const User = model<User>("User", userSchema);

export default User;
