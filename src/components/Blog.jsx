import React from "react";

function Blog() {
  return (
    <div>
      <p className="container text-center px-10 py-6 mx-auto  text-2xl font-bold">
        Question of Quiz Tour
      </p>
      <div className=" dark:text-gray-900 mt-5 mb-28">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-xl">
          <div className="mt-4">
            <p className="text-2xl font-bold">
              1. What is the purpose of react router?
            </p>
            <p className="mt-2">
              React Router is a standard library for routing in React. It
              enables the navigation among views of various components in a
              React Application, allows changing the browser URL, and keeps the
              UI in sync with the URL.
            </p>
          </div>
        </div>
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-xl ">
          <div className="mt-4">
            <p className="text-2xl font-bold">2. how does context api work?</p>
            <p className="mt-2">
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. This is the
              alternative to "prop drilling" or moving props from grandparent to
              child to parent, and so on. Context is also touted as an easier,
              lighter approach to state management using Redux.
            </p>
          </div>
        </div>
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-xl ">
          <div className="mt-4">
            <p className="text-2xl font-bold">3. Useref hook in react :</p>
            <p className="mt-2">
              The useRef Hook allows you to persist values between renders. It
              can be used to store a mutable value that does not cause a
              re-render when updated. It can be used to access a DOM element
              directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
