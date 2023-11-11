import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/v1";
axios.defaults.withCredentials = true;

const userLogin = async (email: string, password: string) => {
  const userData = { email, password };
  const response = await axios.post("/user/login", userData);
  if (response.status !== 200){
    throw new Error("Unable to login");
  }

  const data = await response.data;
  return data
};


export {
    userLogin
}