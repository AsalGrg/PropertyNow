import axios from "axios";
const apiBase = import.meta.env.VITE_API_DOMAIN

export async function getUserData(){
    return axios.get(`${apiBase}api/auth/user`, {
        withCredentials: true
    })
}