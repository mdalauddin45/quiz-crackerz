import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "./Quiz";

const Quizs = () => {
  const loaderData = useLoaderData();
  const quizsData = loaderData.data;
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  lg:px-8 lg:py-20">
      <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 md:grid-cols-2 md:row-gap-0 lg:row-gap-8">
        {quizsData.map((quiz) => (
          <Quiz key={quiz.id} quiz={quiz}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default Quizs;
