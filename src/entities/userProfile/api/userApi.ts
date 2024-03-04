import { IUserData } from "../model/types";
import { baseApi } from "../../../shared/api";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUserData: build.query<IUserData, void>({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
    }),
    updateUserData: build.mutation<IUserData, void>({
      query: () => ({
        url: "/login/oauth/access_token",
      }),
    })
  }),
});

export const { useGetUserDataQuery, useLazyGetUserDataQuery } = userApi;
