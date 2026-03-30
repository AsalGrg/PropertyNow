import axios from "axios";

const api_base = import.meta.env.VITE_API_DOMAIN;

export async function addToFavourite(propertyId) {
  return axios.post(
    `${api_base}api/favourite/${propertyId}`,
    {},
    {
      withCredentials: true,
    },
  );
}

export async function removeFromFavourite(propertyId) {
  return axios.delete(`${api_base}api/favourite/${propertyId}`, {
    withCredentials: true,
  });
}

export async function getFavouriteProperties() {
  return axios.get(`${api_base}api/favourite/all`, { withCredentials: true });
}
