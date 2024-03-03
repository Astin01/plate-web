import axios from 'axios';

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
const api = axios.create({
  baseURL: `${PROXY}`,
});

export default api;
