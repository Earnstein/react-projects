import { NextFunction, Request, Response } from "express";
import { createNewUSer, getAllUser } from "../models/mongo/user.mongo.js";
import bcrypt from "bcrypt";


async function httpGetAllUsers(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    // get all users
    const allUser = await getAllUser();

    res.status(200).json({
      message: "ok",
      allUser,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error", error: error.message });
  }
}

async function httpSignUp(
    req:Request, 
    res:Response, 
    next:NextFunction) {
    try {
        const {name , email, password } = req.body;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await createNewUSer(name, email, hashedPassword);
        res.status(201).json({
            message: "user created successfully",
            id: newUser._id.toString()
        })
    } catch (error) {
        
    }

    
}
export { httpGetAllUsers, httpSignUp };
