import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/protected-route";
import Home from "./routes/home";
import Profile from "./routes/profile";
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
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
