import { createBrowserRouter } from "react-router-dom";
import LayoutDefualt from "./layouts/LayoutDefualt";
import App from "./App";
import View from "./pages/projects/View";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <LayoutDefualt />,
        children: [
          {
            path: "/",
            element: <App />,
          },
          {
            path: "/projects/:projectId",
            element: <View />,
          },
        ],
      },
    ],
  },
]);

export default router;
