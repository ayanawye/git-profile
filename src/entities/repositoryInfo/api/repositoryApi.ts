import { baseApi } from "../../../shared/api";
import { IRepo } from "../model/types";

export const repositoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getRepos: build.query<IRepo[], Record<string, string>>({
      query: ({ user, type }) => ({
        url: `users/${user}/repos`,
        params: {
            type
        }
      })
    })
  }),
});

export const { useGetReposQuery } = repositoryApi;
