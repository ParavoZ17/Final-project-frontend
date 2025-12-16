import instance from "./instance";

// створення посту (контент + фото)
export const createPost = async (payload) => {
  // payload = FormData
  const { data } = await instance.post("/posts", payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};


export const getPosts = async () => {
  const { data } = await instance.get("/posts");
  return data;
};


export const getPostById = async (id) => {
  const { data } = await instance.get(`/posts/${id}`);
  return data;
};

// оновлення посту
export const updatePost = async (id, payload) => {
  const { data } = await instance.patch(`/posts/${id}`, payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

// видалення посту
export const deletePost = async (id) => {
  const { data } = await instance.delete(`/posts/${id}`);
  return data;
};
