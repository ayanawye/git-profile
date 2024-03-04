import { IUserData } from './../model/types';
import { createSlice } from "@reduxjs/toolkit";
import { userApi } from './userApi';

const initialState: { user: IUserData | null } = {
    user: null,  
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (build) => {
       build.addMatcher(userApi.endpoints.getUserData.matchFulfilled, (state, action) => {        
        state.user = action.payload;
       });
    }
});