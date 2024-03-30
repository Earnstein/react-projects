import axios from "axios";
import { BASE_URL } from "@/lib/constants";
import { SignIn, SignUp } from "@/constants/types";
import { toast } from "sonner";

axios.defaults.baseURL = BASE_URL;

// USER SIGN UP
export const userSignup = async (body: SignUp) => {
  try {
    const response = await axios.post("auth/signup", body);
    if (response.status === 201) {
      const data = await response.data;
      return data;
    }
  } catch (error: any) {
    if (axios.isAxiosError(error)){
        toast.error(error.response?.data?.message)
    }
    throw new Error(error);
  }
};


// USER SIGN IN
export const userSignIn = async (body: SignIn) => {
  const response = await axios.post("auth/signin", body);
  const data = await response.data;
    return data;
};