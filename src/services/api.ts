import axios from 'axios';

const api = axios.create({
  // temp
  baseURL: 'http://localhost:8000',
});
export default api;
