import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { ProfilePage, SearchUserPage, UserRepoPage } from "../../pages/index";

export const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <ProfilePage />,
  },
  {
    path: "/repos",
    element: <UserRepoPage />,
  },
  {
    path: "/search-users",
    element: <SearchUserPage />,
  },
]);
