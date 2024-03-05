import { baseApi } from "../../../shared/api";
import { IRepo } from "../model/types";

export const repositoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getRepos: build.query<IRepo[], string>({
      query: (user) => ({
        url: `users/${user}/repos`,
        params: {
          type: "all",
        },
      }),
    }),
  }),
});

export const { useGetReposQuery } = repositoryApi;
