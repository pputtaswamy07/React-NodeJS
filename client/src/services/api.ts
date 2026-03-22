import axios from "axios";
import { MenuItem } from "../types";

const API_BASE_URL = `${import.meta.env.VITE_API_URL}}/api`;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const menuService = {
  getAll: () => api.get<MenuItem[]>("/menu"),
};
