import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Main from "./components/Main";
import Quizs from "./components/Quizs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      {
        path: "/quizs",
        element: <Quizs></Quizs>,
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
      },
    ],
  },
]);
