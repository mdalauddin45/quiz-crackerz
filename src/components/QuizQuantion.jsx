import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "./Question";

const QuizQuantion = () => {
  const loaderData = useLoaderData();
  const quizdata = loaderData.data.questions;
  return (
    <div>
      {quizdata.map((quizs) => (
        <Question key={quizs.id} quizs={quizs}></Question>
      ))}
    </div>
  );
};

export default QuizQuantion;
