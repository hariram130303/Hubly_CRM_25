// frontend/src/api.js
import axios from "axios";

export const api = axios.create({
  baseURL:"https://hubly-backend-crm.onrender.com/api",
});
