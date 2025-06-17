import axios from 'axios';

export const createApi = (token) => axios.create({
    baseURL: 'http://localhost:3000',
    headers: { Authorization: `Bearer ${token}` }
});
