import { Provider } from "react-redux";
import { store } from "./providers/store";
import BaseLayout from "./layout/BaseLayout";
import { rootRouter } from "./providers/router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BaseLayout>
        <RouterProvider router={rootRouter} />
      </BaseLayout>
    </Provider>
  );
}
export default App