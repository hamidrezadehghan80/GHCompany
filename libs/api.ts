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

    // if (err.status === 401) {
    //   if (ProtectedRoutes.includes(window.location.pathname)) {
    //     location.href = Routes.MainPage;
    //   }
    // }

    return Promise.reject(error);
  },
);
