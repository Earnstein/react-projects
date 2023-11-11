import { NextFunction, Request, Response } from "express";
import { createNewUser, getAllUser } from "../models/mongo/user.mongo.js";
import bcrypt from "bcrypt";
import User from "../models/schema/user.mongo.js";
import { createToken } from "../utils/auth.js";
import { COOKIE_NAME } from "../utils/constants.js";

// Middleware for handling HTTP GET request to fetch all users
async function httpGetAllUsers(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    // Retrieve a list of all users from the database
    const allUser = await getAllUser();

    // Respond with a 200 OK status and the list of users
    res.status(200).json({
      message: "Success",
      allUser,
    });
  } catch (error) {
    console.log(error);
    // Handle errors and respond with a 400 Bad Request status
    res.status(400).json({ message: "Error", error: error.message });
  }
}

// Middleware for handling HTTP POST request to sign up a new user
async function httpUserSignUp(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, email, password } = req.body;

    // Check if a user with the same email already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Generate a salt and hash the user's password for security
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user with the provided details
    const newUser = await createNewUser(name, email, hashedPassword);

    // Respond with a 201 Created status and the user's ID
    res.status(201).json({
      message: "created",
      name: newUser.name,
      email: newUser.email,
    });
  } catch (error) {
    console.log(error);
    // Handle errors and respond with a 400 Bad Request status
    res.status(400).json({ message: "Error", error: error.message });
  }
}

// Middleware for handling HTTP POST request to log in an existing user
async function httpUserLogin(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body;

    // Check if the user with the provided email exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User not registered" });
    }

    // Verify the provided password against the stored password hash
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // Clear any previous cookies in the user's browser before setting a new one
    res.clearCookie(COOKIE_NAME, {
      domain: "localhost",
      path: "/",
      httpOnly: true,
      signed: true,
    });

    // Generate a JWT token for the user's authentication
    const token = createToken(user._id.toString(), user.email, "7d");

    // Send the token in a cookie with an expiration date
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 7);

    // Set the cookie using the request.cookie object
    res.cookie(COOKIE_NAME, token, {
      path: "/",
      domain: "localhost",
      expires: expiryDate,
      httpOnly: true,
      signed: true,
    });

    // Respond with a 200 status and the user's ID
    res.status(200).json({
      message: "OK",
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    console.log(error);
    // Handle errors and respond with a 400 Bad Request status
    res.status(400).json({ message: "Error", error: error.message });
  }
}

export { httpGetAllUsers, httpUserSignUp, httpUserLogin };
