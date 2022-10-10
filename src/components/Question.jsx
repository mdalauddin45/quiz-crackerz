import React from "react";

const Question = ({ quiz }) => {
  console.log(quiz);
  const { question, correctAnswer, id, options } = quiz;
  return (
    <div>
      <h1>{question}</h1>
    </div>
  );
};

export default Question;
