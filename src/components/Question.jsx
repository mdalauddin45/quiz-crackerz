import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid";

const Question = ({ quiz }) => {
  // console.log(quiz);
  const { question, correctAnswer, id, options } = quiz;
  console.log(quiz);
  const getAns = (item) => {
    if (item === correctAnswer) {
      alert("right");
    } else {
      alert("worng");
    }
  };
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <section className=" dark:text-gray-900 bg-gray-100 p-6 rounded shadow-lg">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <div className="flex justify-between center">
            <h2 className="text-2xl font-semibold sm:text-4xl mt-4 mb-10">
              {question}
            </h2>
            <EyeIcon className="h-8 w-8" />
          </div>

          <div className="space-y-4">
            <p>
              {options.map((item, xid) => (
                <button
                  onClick={() => getAns(item)}
                  key={xid}
                  className="w-96 border mt-2 rounded-lg px-4 py-4 focus:outline-none focus-visible:ring-violet-400"
                >
                  {item}
                </button>
              ))}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Question;
