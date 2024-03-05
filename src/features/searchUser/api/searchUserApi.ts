import { IRepo } from "../../../entities/repositoryInfo";
import { ISearchResponse } from "../../../entities/searchUser";
import { baseApi } from "../../../shared/api";

export const searchUserApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    searchUser: build.query<ISearchResponse, { q: string; page: number }>({
      query: ({q, page}) => ({
        url: "search/users",
        params: {
          q,
          page,
          per_page: 30
        },
      }),
    }),
    getReposByUser: build.query<IRepo[], string>({
      query: (user) => ({
        url: `users/${user}/repos`,
        params: {
          type: 'public',
        },
      }),
    }),
  }),
});

export const { useLazySearchUserQuery, useLazyGetReposByUserQuery } = searchUserApi;
