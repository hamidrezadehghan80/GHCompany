import axios from "axios";
import { API_URL } from "../config";

export const mainApiInstance = axios.create({
  baseURL: API_URL,
});

mainApiInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const err = error.toJSON();
    return Promise.reject(error);
  },
);
