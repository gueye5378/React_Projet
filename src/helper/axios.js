import axios from "axios"
import { api } from "../urlConfig.js";

const token =window.localStorage.getItem("token");
const axiosInstance = axios.create({
    baseURL : api,
    headers: {
        'Authorization' : token ? `token ${token}`: ''
    }
});

export default axiosInstance;