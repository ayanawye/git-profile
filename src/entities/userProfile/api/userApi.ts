import { IUserData } from "../model/types";
import { baseApi } from "../../../shared/api";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUserData: build.query<IUserData, string | any>({
      query: (token) => ({
        url: "/user",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      }),
    }),
    updateUserData: build.mutation<IUserData, string | any>({
      query: (token) => ({
        url: "/login/oauth/access_token",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      }),
    }),
  }),
});

export const { useGetUserDataQuery, useLazyGetUserDataQuery } = userApi;
