import { Schema, model, Document } from "mongoose";
import { userRoleType } from "../constants/types";

export interface User extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  location: string;
  role: string;
}

const UserSchema = new Schema<User>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    default: "Nigeria",
  },
  role: {
    type: String,
    enum: Object.values(userRoleType),
    default: userRoleType.user,
  },
});

UserSchema.pre("save", async function (next){
  try {
    const userCount = await User.countDocuments();

    if (userCount === 0){
      this.role = "admin"
    }

    // hash password
    if (this.isModified("password")) {
      const hashedPassword = await Bun.password.hash(this.password, {
        algorithm: "bcrypt",
        cost: 10
      });
      this.password = hashedPassword;
    }
    
    next();
  } catch (error: any) {
    next(error);
  }
})



const User = model<User>("User", UserSchema);
export default User;
