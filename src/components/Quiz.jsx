import React from "react";

const Quiz = ({ quiz }) => {
  const { logo, name } = quiz;
  return (
    <div className="bg-gray-100 p-6 rounded shadow-lg">
      <img
        className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
        src={logo}
        alt=""
      />
      <div className="flex justify-between">
        <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
          {name}
        </p>

        <button
          type="button"
          className="px-8 block  py-3 font-semibold rounded-full bg-purple-200 text-gray-800 hover:bg-purple-300"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Quiz;
