import React from "react";
import { Link } from "react-router-dom";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";

const Quiz = ({ quiz }) => {
  const { id, logo, name, total } = quiz;
  // console.log(quiz);
  return (
    <div className="bg-gray-100 p-6 rounded shadow-lg">
      <img
        className=" w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
        src={logo}
        alt=""
      />
      <div className="flex justify-between">
        <h6 className="mb-2">
          <span className="text-xl font-bold"> {name}</span> <br />
          <p>Total Question {total}</p>
        </h6>

        <Link
          to={`../quiz/${id}`}
          className="px-8 flex py-4 font-semibold rounded-full bg-purple-200 text-gray-800 hover:bg-purple-300"
        >
          Start Practice <ChevronDoubleRightIcon className="h-6 w-8" />
        </Link>
      </div>
    </div>
  );
};

export default Quiz;
