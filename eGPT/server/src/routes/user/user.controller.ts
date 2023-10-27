import User from "../../models/User.js";

async function httpCreateUser(req, res) {
    try {
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
          });
          await newUser.save();
          const user = await User.find();
        
          res.status(201).json(user);
      } catch (error) {
        res.status(500).json({ error: error });
      }
}

export {
    httpCreateUser
}