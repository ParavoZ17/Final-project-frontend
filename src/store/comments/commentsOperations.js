import * as api from "../../shared/api/posts-api";

export const addComment = (postId, content, token) => async () => {
  const data = await api.addComment(postId, { content }, token);
  return data;
};

export const getComments = (postId, token) => async () => {
  const data = await api.getComments(postId, token);
  return data;
};

export const deleteComment = (postId, commentId, token) => async () => {
  const data = await api.deleteComment(postId, commentId, token);
  return data;
};

export const toggleCommentLike = (commentId, token) => async () => {
  const data = await api.toggleCommentLike(commentId, token);
  return data;
};
