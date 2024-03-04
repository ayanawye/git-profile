export interface IAuthData {
  access_token: string;
  scope: string;
  token_type: string;
}
export interface IUserData {
  avatar_url: string;
  bio: null | string;
  blog: string;
  company: null | string;
  created_at: string;
  email: null | string;
  events_url: string;
  followers: number | any;
  followers_url: string;
  following: number | any;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: null | any;
  html_url: string;
  id: number;
  location: null | any;
  login: string;
  name: null | string;
  node_id: string;
  organizations_url: string | any;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: null | string;
  type: string;
  updated_at: string;
  url: string;
}
export interface IInitialState {
  userData: IUserData | null;
}
export const initialState: IInitialState = {
  userData: null,
};
