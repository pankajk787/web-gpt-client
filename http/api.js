import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const generateChat = data => api.post('/api/generate', data);