import instance from "./instance";

export const createPost = async (payload) => {
  const { data } = await instance.post("/posts", payload);
  return data;
};

export const getPosts = async (token) => {
  const { data } = await instance.get("/posts", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getPostById = async (id) => {
  const { data } = await instance.get(`/posts/${id}`);
  return data;
};

export const updatePost = async (id, payload) => {
  const { data } = await instance.patch(`/posts/${id}`, payload);
  return data;
};

export const deletePost = async (id) => {
  const { data } = await instance.delete(`/posts/${id}`);
  return data;
};

export const like = async (id) => {
  const { data } = await instance.post(`/posts/${id}/like`);
  return data;
};

export const addComment = async (postId, payload) => {
  const { data } = await instance.post(`/posts/${postId}/comment`, payload);
  return data;
};

export const getComments = async (postId) => {
  const { data } = await instance.get(`/posts/${postId}/comment`);
  return data;
};

export const deleteComment = async (postId, commentId) => {
  const { data } = await instance.delete(`/posts/${postId}/comment/${commentId}`);
  return data;
};

export const toggleCommentLike = async (postId, commentId) => {
  const { data } = await instance.post(`/posts/${postId}/comment/${commentId}/like`);
  return data;
};

