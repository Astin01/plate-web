import api from './api';

//로그인
export const login = (username, password) =>
  api.post(`/login?username=${username}&password=${password}`);

//사용자 정보
export const getUserInfo = () => api.get(`/api/users/info`);

//회원 가입
export const register = (data) => api.post(`/api/users`, data);

//회원 정보 수정
export const update = (data) => api.put(`/api/users`, data);

//회원 탈퇴
export const deleteAccount = (userId) => api.delete(`/api/users/${userId}`);
