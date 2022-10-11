import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "./Question";

const QuizQuantion = () => {
  const loaderData = useLoaderData();
  const quizdata = loaderData.data.questions;
  return (
    <div>
      <h1 className="container text-center  py-6 mx-auto  text-2xl font-bold">
        Quiz Of {loaderData.data.name}
      </h1>
      {quizdata.map((quizs) => (
        <Question key={quizs.id} quizs={quizs}></Question>
      ))}
    </div>
  );
};

export default QuizQuantion;
