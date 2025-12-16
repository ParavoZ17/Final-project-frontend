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