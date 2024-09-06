import axios from "axios";
import getCookie from "./getCookie";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/",
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true
})

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const refreshToken = getCookie('refresh-token');
        const response = await axios.post('http://localhost:8000/api/token/refresh', {refresh: refreshToken});
        const [access, refresh] = response.data

        document.cookie = `access-token=${access}; path=/`;
        document.cookie = `refresh-token=${refresh}; path=/`;

        axiosInstance.defaults.headers['Authorization'] = `Bearer ${access}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error)
  }
)

export default axiosInstance;