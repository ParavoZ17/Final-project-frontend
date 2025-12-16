    import { combineReducers } from "@reduxjs/toolkit";
    import { persistReducer } from "redux-persist";
    import storage from "redux-persist/lib/storage";

    import postsReducer from "./posts/postsSlice";
    import authReducer from "./auth/authSlice";
  import profileReducer from "./profile/profileSlice.js"
  import userReducer from "./user/userSlice";

    const persistConfig = {
      key: "auth",
      storage,
      // whitelist: ["accessToken", "refreshToken"]
    };

    const persistedAuthReducer = persistReducer(persistConfig, authReducer);

    const rootReducer = combineReducers({
      auth: persistedAuthReducer,
      posts: postsReducer,
      profile: profileReducer,
      user: userReducer,
    }); 

    export default rootReducer;