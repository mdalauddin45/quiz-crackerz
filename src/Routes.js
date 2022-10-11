import { createBrowserRouter } from "react-router-dom";
import Blog from "./components/Blog";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Main from "./components/Main";
import QuizQuantion from "./components/QuizQuantion";
import Quizs from "./components/Quizs";
import Statistics from "./components/Statistics";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/statistics", element: <Statistics></Statistics> },
      { path: "/blog", element: <Blog></Blog> },
      {
        path: "/quizs",
        element: <Quizs></Quizs>,
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
      },
      {
        path: "quiz/:id",
        element: <QuizQuantion></QuizQuantion>,
        loader: ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
      },
    ],
  },
]);
