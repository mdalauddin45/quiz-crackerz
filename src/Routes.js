import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Main from "./components/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
