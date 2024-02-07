import api from './api';

// 토론 생성
export const createDiscussion = (data) => api.post(`/api/discussion`, data);

//id로 토론 목록 조회
export const getDiscussion = (id) => api.get(`/api/discussion/${id}`);

//토론 목록 전부 조회
export const getAllDiscussion = () => api.get(`/api/discussion`);

//토론 정보 수정
export const updateDiscussion = (id, data) =>
  api.put(`/api/discussion/${id}`, data);

//토론 삭제
export const deleteDiscussion = (id) => api.delete(`/api/discussion/${id}`);
