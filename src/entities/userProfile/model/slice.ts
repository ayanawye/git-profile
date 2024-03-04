import { createSlice } from "@reduxjs/toolkit";
import { IUserData } from "./types";
import { initialState } from "./types";
import type { PayloadAction } from "@reduxjs/toolkit";

export const userData = createSlice({
    name: "userData",
    initialState,
    reducers: {
      getUserData(state, action: PayloadAction<IUserData>) {
        state.userData = action.payload;
      },
    },
  });
  
  export default userData.reducer;