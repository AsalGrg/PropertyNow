import axios from "axios";
const API_BASE = import.meta.env.VITE_API_DOMAIN;


export default async function loginUser(data) {

    console.log(data)
  return await axios.post(`${API_BASE}api/auth/login`, data, {
    withCredentials: true
  });
}
