import axios from "axios";
const apiBase = import.meta.env.VITE_API_DOMAIN;


async function fetchProperties() {
    const response = await axios.get(`${apiBase}api/property/all`, {withCredentials:true})
    return response;
}

export default fetchProperties;