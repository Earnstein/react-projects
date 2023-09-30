import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../../models/User.model.js";
dotenv.config({ path: "server/.env" });

/*REGISTER USER*/
async function register(req, res) {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}

/* LOGGING IN */

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist. " });

    // checking if password matched hashedpassword

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    // sign user in with an id and a secret string
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    // deleting password so it doesnt get sent to frontend
    delete user.password;

    res.status(200).json({
      token,
      user,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export { register, login };
