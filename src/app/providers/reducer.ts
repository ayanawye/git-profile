import { combineReducers } from "@reduxjs/toolkit";
import { userApi, userSlice } from "../../entities/userProfile";
import { getTokenApi } from "../../entities/userProfile/api/getToken";

export const rootReducer = combineReducers({
  user: userSlice.reducer,

  [userApi.reducerPath]: userApi.reducer,
  [getTokenApi.reducerPath]: getTokenApi.reducer,
});

