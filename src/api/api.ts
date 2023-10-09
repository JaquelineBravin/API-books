import axios from "axios";

export const url = process.env.EXPO_PUBLIC_URL_API;

const api = axios.create({
	baseURL: url,
});

export default api;
