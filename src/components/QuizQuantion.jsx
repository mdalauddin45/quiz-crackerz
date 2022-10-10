import React from "react";
import { useLoaderData } from "react-router-dom";

const QuizQuantion = () => {
  const loaderData = useLoaderData();
  const quizdata = loaderData.data;

  console.log(quizdata);
  return (
    <div>
      <h1>hi</h1>
    </div>
  );
};

export default QuizQuantion;
