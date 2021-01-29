import axios from 'axios';

const api = axios.create({
  // temp
  baseURL: 'https://api.github.com/',
});
export default api;
