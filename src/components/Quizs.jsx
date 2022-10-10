import React from "react";
import { useLoaderData } from "react-router-dom";

const Quizs = () => {
  const loaderData = useLoaderData();
  const quizsData = loaderData.data;
  console.log(quizsData);
  return (
    <div>
      <h1>hi</h1>
    </div>
  );
};

export default Quizs;
