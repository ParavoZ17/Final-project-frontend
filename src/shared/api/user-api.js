import instance from "./instance";

export const getUser = async (username) => {
  const {data} = await instance.get(`/user/${username}`);
  return data;
};

export const uploadAvatar = async (formData) => {
  const {data} = await instance.patch("/user/avatar", formData);
  return data;
}

export const updateMe = async (formData) => {
  const {data} = await instance.patch("/user/me", formData);
  return data;
}

export const searchUsers = async (query) => {
  const { data } = await instance.get(
    `/user/search?query=${query}`
  );
  return data;
};

export const getIsFollowing = async (userId) => {
  const {data} = await instance.get(`/user/${userId}/is-following`);
  return data;
}

export const follow = async (userId) => {
  const {data} = await instance.post(`/user/${userId}/follow`);
  return data;
}


export const unFollow = async (userId) => {
  const {data} = await instance.delete(`/user/${userId}/follow`);
  return data;
}