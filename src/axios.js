import axios from "axios";

export default axios.create({
  // withCredentials: true,
  baseURL: "http://35.232.138.198:8000/",
  // baseURL: "http://localhost:8000/",
});
