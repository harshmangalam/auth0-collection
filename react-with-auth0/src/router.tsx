import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/home";
import Root from "./routes/root";

export default createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
