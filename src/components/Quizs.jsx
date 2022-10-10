import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "./Quiz";

const Quizs = () => {
  const loaderData = useLoaderData();
  const quizsData = loaderData.data;
  //   console.log(quizsData);
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-4 lg:row-gap-8">
        {quizsData.map((quiz) => (
          <Quiz key={quiz.id} quiz={quiz}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default Quizs;
