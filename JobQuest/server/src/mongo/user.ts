import User from "../models/user";
import type { SignInType, UserBody, UserPatch } from "../constants/types";
import { BadRequest, NoContent, Unauthenticated } from "../middleware/error";

const findUser = async (email: string) => {
  const user = await User.findOne({ email: email });
  return user;
};

export const createUser = async (body: UserBody) => {
  const existingUser = await findUser(body.email);

  if (existingUser) {
    throw new BadRequest("User already Exists");
  }

  const user = new User({
    ...body,
  });
  await user.save();
  const newUser = await User.findById(
    {
      _id: user._id,
    },
    {
      __v: 0,
      createdAt: 0,
      updatedAt: 0,
    }
  );

  return newUser;
};

export const findExistingUser = async (body: SignInType) => {
  const existingUser = await findUser(body.email);

  if (!existingUser) {
    throw new Unauthenticated("User does not Exist");
  }

  const isValidPassword = await Bun.password.verify(
    body.password,
    existingUser.password
  );
  if (!isValidPassword) {
    throw new BadRequest("Incorrect password");
  }

  return existingUser;
};

export const getUserById = async (id: String) => {
  const user = await User.findById(id);
  return user;
}


export const editUserById = async (id: string, body: UserPatch) => {
  const user = await User.findByIdAndUpdate(
    id,
    {
      ...body,
    },
    {
      returnDocument: "after",
      select: {
        __v: 0,
        createdAt: 0,
        updatedAt: 0,
      },
    }
  );

  return user;
};

export const findAllUsers = async () => {
  const users = await User.find(
    {},
    {
      _id: 1,
      __v: 0,
      createdAt: 0,
      updatedAt: 0,
    }
  );
  if (users.length === 0) {
    throw new NoContent("User's list is empty");
  }

  return users;
};

export const deleteAllUsers = async () => {
  const user = await User.deleteMany({role: {$ne : "admin"}});
  if (user.deletedCount === 0) {
    throw new NoContent("The user list is Empty");
  }

  return user;
};

export const userStats =async () => {
  const users = User.countDocuments()
  return users
}
