import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api/v1";
axios.defaults.withCredentials = true;

const reset = async () => {
  const response = await axios.get("/reset-audio");
  if (response.status !== 200) {
    throw new Error("Unable to reset");
  }
  return response.data;
};

const postAudio = async (data) => {
  const response = await axios.post("/post-audio", data, {
    headers: { "Content-Type": "multipart/form-data" },
    responseType: "arraybuffer",
  });
  if (response.status !== 200) {
    throw new Error("Can't send audio");
  }
  return response.data;
};
export { reset, postAudio };
