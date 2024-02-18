import api from './api';

//카테고리 아이콘 정보 전부 조회
export const getAllCategoryIcon = () => api.get(`/api/icon`);
