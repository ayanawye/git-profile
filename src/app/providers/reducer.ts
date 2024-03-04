import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "../../entities/userProfile";
import { getTokenApi } from "../../entities/userProfile/api/getToken";
import { baseApi } from "../../shared/api";

export const rootReducer = combineReducers({
  user: userSlice.reducer,

  [baseApi.reducerPath]: baseApi.reducer,
  [getTokenApi.reducerPath]: getTokenApi.reducer,
});

