import axios from "axios";
import { API_URL } from "./api";

// CREATE CUSTOM METHOD TO FETCH DATA
const customAxios = axios.create({
  baseURL: API_URL,
});

export default customAxios