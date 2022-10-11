import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Question from "./Question";

const QuizQuantion = () => {
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const loaderData = useLoaderData();
  const quizdata = loaderData.data.questions;

  return (
    <div>
      <div className="flex">
        <h1 className="container text-center  py-6 mx-auto  text-2xl font-bold">
          Quiz Of {loaderData.data.name}
        </h1>
        <h1 className="container text-center font-bold  mx-auto py-8">
          <span>Correct: {correct} </span>
          Wrong: {wrong}
        </h1>
      </div>
      {quizdata.map((quizs) => (
        <Question
          key={quizs.id}
          quizs={quizs}
          wrong={wrong}
          setWrong={setWrong}
          setCorrect={setCorrect}
          correct={correct}
        ></Question>
      ))}
    </div>
  );
};

export default QuizQuantion;
