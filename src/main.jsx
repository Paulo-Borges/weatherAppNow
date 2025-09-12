import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/global.css";
import App from "../src/App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/routes/Home.jsx";
import Dashboard from "../src/routes/Dashboard.jsx";
import ErrorPage from "../src/routes/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
