import axios from 'axios';

console.log(import.meta.env.VITE_API_URL);
export const instance = axios.create({
	baseURL: import.meta.env.API_URL,
});
