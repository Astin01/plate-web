import api from './api';

// 제안 생성
export const createSuggestion = (restaurant_id, data) =>
  api.post(`/api/suggestion/${restaurant_id}`, data);

//id로 제안 조회
export const getSuggestion = (suggestion_id) =>
  api.get(`/api/suggestion/${suggestion_id}`);

//제안 목록 전부 조회
export const getAllSuggestion = () => api.get(`/api/suggestion`);

//제안 수정
export const editSuggestion = (suggestion_id, data) =>
  api.put(`/api/suggestion/${suggestion_id}`, data);

//제안 삭제
export const deleteSuggestion = (suggestion_id) =>
  api.delete(`/api/suggestion/${suggestion_id}`);

//제안 반영
export const sendSuggestion = (suggestion_id) =>
  api.put(`/api/suggestion/toRestaurant/${suggestion_id}`);
