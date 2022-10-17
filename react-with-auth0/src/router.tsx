import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";

export default createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);
