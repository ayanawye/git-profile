// import { Route } from "react-router";
// import { Routes } from "react-router";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";
// import ProfilePage from "./profile/index";
// import UserRepoPage from "./userRepo/index";
// import SearchUserPage from "./searchUsers/index";

export { default as ProfilePage } from "./profile/index";
export { default as SearchUserPage } from "./searchUsers/index";
export { default as UserRepoPage } from "./userRepo/index";
export { default as GitHubAuth } from "./auth/index";
export { default as NotFoundPage } from "./notFound/index";

// export const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route path="/profile" element={<ProfilePage />} />
//       <Route path="/repos" element={<UserRepoPage />} />
//       <Route path="/search-users" element={<SearchUserPage />} />
//     </Route>
//   )
// );
