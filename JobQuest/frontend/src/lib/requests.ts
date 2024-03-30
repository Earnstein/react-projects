import axios from "axios";
import { BASE_URL } from "@/lib/constants";
import { SignIn, SignUp } from "@/constants/types";

axios.defaults.baseURL = BASE_URL;

// SIGN UP
export const userSignup = async (body: SignUp) => {
  const response = await axios.post("auth/signup", body);
  const data = await response.data;
  return data;
};


// SIGN IN
export const userSignIn = async (body: SignIn) => {
  const response = await axios.post("auth/signin", body);
  const data = await response.data;
  return data;
};

// LOGOUT
export const userLogout = async () => {
  const response = await axios.get("auth/logout");
  const data = await response.data;
  return data;
};

// GET CURRENT USER
export const getUser = async () => {
  const response = await axios.get("user/current");
  const data = await response.data;
  return data;
}
