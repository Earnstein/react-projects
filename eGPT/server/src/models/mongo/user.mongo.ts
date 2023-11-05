import User from "../schema/user.mongo.js"


async function createNewUser(name, email, password) {
    const user = new User({name, email, password});
    const savedUser = await user.save();
    return savedUser;
    
}

async function getAllUser() {
    const Users = await User.find()
    return Users
}


export {
    getAllUser,
    createNewUser
}