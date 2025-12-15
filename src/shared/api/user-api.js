import instance from "./instance";

export const getUser = async (username) => {
  const {data} = await instance.get(`/user/${username}`);
  return data;
};
