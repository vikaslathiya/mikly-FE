import axios from "axios";

const apiBaseUrl = "http://localhost:8080/";

const withAuthInstance = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

withAuthInstance.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token;
    } else {
      localStorage.clear(); // use this if needed. this will remove all items from localstorage
      delete withAuthInstance.defaults.headers.common.Authorization;
    }
    return config;
  },

  (error) => console.error(error)
);

export default withAuthInstance;
