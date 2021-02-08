import axios from "axios";

const BASE_URL = process.env.VUE_APP_BASE_URL;

export const Api = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json"
  }
});
