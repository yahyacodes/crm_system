import React from "react";

import Sidebar from "../Components/Sidebar";
import { BsCheckLg } from "react-icons/bs";

const Completed = () => {
  return (
    <div className="flex justify-center ml-20 min-h-screen">
      <Sidebar />
      <div className="flex-1 max-w-5xl p-6">
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-black">
          <BsCheckLg />
          <h2 className="text-lg font-semibold ml-2">Completed Tasks</h2>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 gap-4 grid-flow-row-dense">
          <div className="p-4 pr-6 bg-white border-l-8 border-teal-400 rounded-md shadow-md space-y-2">
            <h2 className="text-lg font-semibold leading-6">Home renovation</h2>
            <p className="text-gray-600">
              A place to keep track of all the renovation going around the house
            </p>
            <p className="text-xs text-gray-500 ml-80">15-12-2022</p>
          </div>

          <div className="p-4 pr-6 bg-white border-l-8 border-teal-400 rounded-md shadow-md space-y-2">
            <h2 className="text-lg font-semibold leading-6">Home renovation</h2>
            <p className="text-gray-600">
              A place to keep track of all the renovation going around the house
            </p>
          </div>

          <div className="p-4 pr-6 bg-white border-l-8 border-teal-400 rounded-md shadow-md space-y-2">
            <h2 className="text-lg font-semibold leading-6">Home renovation</h2>
            <p className="text-gray-600">
              A place to keep track of all the renovation going around the house
            </p>
          </div>

          <div className="p-4 pr-6 bg-white border-l-8 border-teal-400 rounded-md shadow-md space-y-2">
            <h2 className="text-lg font-semibold leading-6">Home renovation</h2>
            <p className="text-gray-600">
              A place to keep track of all the renovation going around the house
            </p>
          </div>

          <div className="p-4 pr-6 bg-white border-l-8 border-teal-400 rounded-md shadow-md space-y-2">
            <h2 className="text-lg font-semibold leading-6">Home renovation</h2>
            <p className="text-gray-600">
              A place to keep track of all the renovation going around the house
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Completed;
