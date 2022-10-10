import React from "react";
import { Link } from "react-router-dom";

const Quiz = ({ quiz }) => {
  const { id, logo, name } = quiz;
  //   console.log(quiz);
  return (
    <div className="bg-gray-100 p-6 rounded shadow-lg">
      <img
        className=" w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
        src={logo}
        alt=""
      />
      <div className="flex justify-between">
        <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
          {name}
        </p>

        <Link
          to={`../quiz/${id}`}
          className="px-8 block  py-3 font-semibold rounded-full bg-purple-200 text-gray-800 hover:bg-purple-300"
        >
          Start Practice
        </Link>
      </div>
    </div>
  );
};

export default Quiz;
