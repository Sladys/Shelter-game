import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:9090/api",
});

export default apiClient;
