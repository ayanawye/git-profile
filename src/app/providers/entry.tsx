import React from "react";
import ReactDOM from "react-dom/client";
import BaseLayout from "../layout/BaseLayout";
import { Provider } from "react-redux";
import { store } from "./store";
import { rootRouter } from "./router";
import { RouterProvider } from "react-router-dom";

export const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BaseLayout>
        <RouterProvider router={rootRouter}/>
      </BaseLayout>
    </Provider>
  </React.StrictMode>
);
