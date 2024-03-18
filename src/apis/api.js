import axios from 'axios';

// const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
const ROOT_URL =
  process.env.NODE_ENV === 'production'
    ? 'http://ec2-3-38-94-43.ap-northeast-2.compute.amazonaws.com'
    : '';
const api = axios.create({
  // baseURL: `${PROXY}`,
  baseURL: `${ROOT_URL}`,
});

export default api;
