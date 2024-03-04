import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getGitHubCode } from "../../../shared";
import { IAuthData } from "../model/types";

export const getTokenApi = createApi({
  reducerPath: "getTokenApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_GITHUB_AUTH }),
  endpoints: (build) => ({
    getToken: build.query<IAuthData, string | any>({
      query: (code) => ({
        url: "/login/oauth/access_token",
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        params: {
          client_id:  process.env.REACT_APP_CLIENT_ID,
          client_secret: process.env.REACT_APP_CLIENT_SECRET,
          code,
        },
      }),
      transformResponse: (response: IAuthData): IAuthData => {
        if (response.access_token) {
          localStorage.setItem("access_token", response.access_token);
          localStorage.setItem("code", getGitHubCode());
        }
        return response;
      },
    }),
  }),
});

export const { useGetTokenQuery } = getTokenApi;
