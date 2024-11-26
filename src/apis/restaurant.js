import api from './api';

// 식당 생성
export const createRestaurant = (data) => api.post(`/api/restaurants`, data);

//id로 식당 목록 조회
export const getRestaurantById = (id) => api.get(`/api/restaurants/id/${id}`);

//이름으로 식당 목록 조회
export const getRestaurantByName = (name) =>
  api.get(`/api/restaurants/name/${name}`);

//카테고리별 식당 목록 조회
export const getRestaurantByCategory = (category) =>
  api.get(`/api/restaurants/category/${category}`);

export const getRestaurantByPreferencesCategory = (category) =>
  api.get(`/api/restaurants/category/${category}/recommend`);

//식당 목록 전부 조회
export const getAllRestaurant = () => api.get(`/api/restaurants`);

//식당 정보 수정
export const updateRestaurant = (id, data) =>
  api.put(`/api/restaurants/id/${id}`, data);

//식당 삭제
export const deleteRestaurant = (id) => api.delete(`/api/restaurants/id/${id}`);
