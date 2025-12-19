export const selectAuthError = (state) => state.auth.error;
export const selectAuthLoading = (state) => state.auth.loading;
export const selectIsRegisterSuccess = (state) => state.auth.isRegisterSuccess;

export const selectToken = (store) => Boolean(store.auth.accessToken);

export const selectUser = (store) => store.auth.user;

export const selectRefreshToken = (state) => state.auth.refreshToken;
export const selectAccessToken = (state) => state.auth.accessToken;
