import axios from "axios";
import { BASE_URL, editJobSchema } from "@/lib/constants";
import { SignIn, SignUp } from "@/constants/types";
import { addJobSchema } from "@/lib/constants";
import * as z from "zod";

axios.defaults.baseURL = BASE_URL;
axios.defaults.withCredentials = true;

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
  const response = await axios.post("auth/logout");
  const data = await response.data;
  return data;
};

// GET CURRENT USER
export const getUser = async () => {
  const response = await axios.get("user/current");
  const data = await response.data;
  return data;
}

export const addJob = async (body: z.infer<typeof addJobSchema>) => {
  const response = await axios.post("job", body);
  const data = await response.data;
  return data;
}

export const allJob =async () => {
  const response = await axios.get("job");
  const data = await response.data;
  return data
}

export const editJob = async (id:string, body: z.infer<typeof editJobSchema>) => {
  const response = await axios.patch(`job/${id}`, body);
  const data = await response.data;
  return data;
}

export const deleteJob = async (id: string) => {
  const response = await axios.delete(`job/${id}`);
  const data = await response.data;
  return data
}