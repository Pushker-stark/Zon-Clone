import axios from "axios";

const instance = axios.create({
  baseURL: "https://pn-zon-backend.onrender.com",
});

export default instance;
