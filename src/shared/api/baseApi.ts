import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../helper/getToken";

export const baseApi = createApi({
  tagTypes: ["USER", "REPO"],
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_USER_DATA_URL,
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
        headers.set("Accept", "application/json");
        return headers;
      }
    },
  }),
  endpoints: () => ({}),
});
