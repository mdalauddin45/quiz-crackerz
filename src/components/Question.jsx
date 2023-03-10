import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import Swal from "sweetalert2";

const Question = ({ quizs, correct, setCorrect, setWrong, wrong }) => {
  const { question, correctAnswer, options } = quizs;

  const getAns = (item) => {
    if (item === correctAnswer) {
      Swal.fire("Correct Answer!", "You clicked the button!", "success");
      setCorrect(correct + 1);
    } else {
      Swal.fire({
        icon: "error",
        title: "Wrong",
        text: "Your Answer wrong!",
      });
      setWrong(wrong + 1);
    }
  };

  const showAnswer = () => {
    Swal.fire(
      `Correct Answer is ${correctAnswer}`,
      "You clicked the button!",
      "success"
    );
  };

  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        <section className=" dark:text-gray-900 bg-gray-100 p-6 rounded shadow-lg">
          <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <div className="flex justify-between center">
              <h2 className="text-2xl font-semibold sm:text-4xl mt-4 mb-10">
                {question}
              </h2>
              <button>
                <span
                  onClick={() => {
                    showAnswer(correctAnswer);
                  }}
                >
                  <EyeIcon className="h-6 w-8" />
                </span>
              </button>
            </div>

            <div className="space-y-4 text-xl">
              {options.map((item, xid) => (
                <button
                  onClick={() => getAns(item)}
                  key={xid}
                  className="w-full border m-2 bg-white shadow-xl rounded-lg px-4 py-4 focus:outline-none focus-visible:ring-violet-400"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Question;
