import api from './api';

export const saveUserPreference = (data) =>
  api.post(`/api/users/preferences`, data);

export const updateUserPreference = (data) =>
  api.put(`/api/users/preferences`, data);
