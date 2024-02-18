import api from './api';

// 공지 생성
export const createNotice = (data) => api.post(`/api/notice`, data);

//id로 공지 목록 조회
export const getNotice = (id) => api.get(`/api/notice/${id}`);

//공지 목록 전부 조회
export const getAllNotice = () => api.get(`/api/notice`);

//공지 정보 수정
export const updateNotice = (id, data) => api.put(`/api/notice/${id}`, data);

//공지 삭제
export const deleteNotice = (id) => api.delete(`/api/notice/${id}`);
