import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.meulivrinho.art.br'
});

export default api;