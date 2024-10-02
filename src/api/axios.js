import axios from "axios";

export const BASE_URL = "http://localhost:3500";
// export const BASE_URL = "https://server-trading-app-production.up.railway.app";

export default axios.create({
  baseURL: BASE_URL,
});
