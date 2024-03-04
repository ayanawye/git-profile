import { Provider } from "react-redux";
import { store } from "./providers/store";
import BaseLayout from "./layout/BaseLayout";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { lazy } from "react";

const GitHubAuth = lazy(() => import('../pages/auth/index'))
const ProfilePage = lazy(() => import('../pages/profile/index'))
const SearchUserPage = lazy(() => import('../pages/searchUsers/index'))
const UserRepoPage = lazy(() => import('../pages/userRepo/index'))
const NotFoundPage = lazy(() => import('../pages/notFound/index'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout />} errorElement={<NotFoundPage/>}>
      <Route index element={<GitHubAuth />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="repos" element={<UserRepoPage />} />
      <Route path="search-users" element={<SearchUserPage />} />
    </Route>
  )
);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}
export default App;
