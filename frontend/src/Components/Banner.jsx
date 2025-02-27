import React from "react";

function Banner() {
  return (
    <>
      <div className="mt-12 md:pt-32 max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full md:w-1/2 ">
          <div className="space-y-12 ">
            <div className="text-4xl font-bold ">
              <h1>
                Hello, Welcome here to Learn something{" "}
                <span className="text-pink-500">new Everyday!!!</span>
              </h1>
            </div>
            <div>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                soluta nemo dolorem vitae maiores maxime odio! Distinctio, vel
                reprehenderit! Maiores officia labore ex beatae odio debitis
                numquam quae sint ullam!
              </p>
            </div>
            <div>
              <label className="flex items-center border gap-2 rounded-lg p-1 w-150 border-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-7 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow outline-none focus:outline-none focus:ring-0 border-none"
                  placeholder="Email"
                />
              </label>
            </div>
          </div>
          <button className="btn btn-secondary mt-6">Secondary</button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:order-1">
          <img src="Banner.png" className="h-90 ml-16" alt="Banner" />
        </div>
      </div>
    </>
  );
}

export default Banner;
