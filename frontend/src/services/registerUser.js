import axios from "axios"

const apiBase= import.meta.env.VITE_API_DOMAIN

export default async function registerUser(data){
    
    return await axios.post(`${apiBase}api/auth/register`,data,{
        withCredentials: true
    })
    
}