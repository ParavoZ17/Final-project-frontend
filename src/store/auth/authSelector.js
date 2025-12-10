
export const selectAuthRequest = (store) => {
  return {
    loading: store.auth.loading,
    error: store.auth.error,
    isRegisterSuccess: store.auth.isRegisterSuccess,
  };
};


export const selectToken = store => Boolean (store.auth.accessToken)

export const selectUser = store => store.auth.user;