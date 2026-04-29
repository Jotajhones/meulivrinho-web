import axios from 'axios';

const api = axios.create({
  // baseURL: import.meta.env.VITE_API_URL 
  baseURL: 'https://api.meulivrinho.art.br'
});

export default api;