import axios from 'axios';

const api = axios.create({
  baseURL: 'https://meulivrinho-api.onrender.com'
});

export default api;