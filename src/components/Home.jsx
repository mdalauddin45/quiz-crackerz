import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import reader from "../assets/reader.json";

const Home = () => {
  return (
    <div className=" text-gray-900">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Welcome To Our
            <span className="text-violet-400"> Quiz</span> Tour
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Quality assurance is a set of activities to ensure that a website
            meets the
            <br className="hidden md:inline lg:hidden" />
            specified requirements, the agreed-upon standards and procedures,
            and the best practices.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              rel="noopener noreferrer"
              to="#"
              className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900"
            >
              GO TO QUIZ
            </Link>
            <Link
              rel="noopener noreferrer"
              to="#"
              className="px-8 py-3 text-lg font-semibold border rounded border-gray-100"
            >
              SEE MORE..
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="assets/svg/Business_SVG.svg"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="relative lg:w-1/2 ">
          <div className="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96">
            <Lottie animationData={reader} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
