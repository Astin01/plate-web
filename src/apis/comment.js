import api from './api';

// 댓글 생성
export const createComment = (discussion_id, data) =>
  api.post(`/api/comment/${discussion_id}`, data);

//댓글 전부 조회
export const getComment = (discussion_id) =>
  api.get(`/api/comment/${discussion_id}`);

//댓글 수정
export const editComment = (comment_id, data) =>
  api.put(`/api/comment/${comment_id}`, data);

//댓글 삭제
export const deleteComment = (comment_id) =>
  api.delete(`/api/comment/${comment_id}`);
