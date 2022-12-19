import React from "react";

import Sidebar from "../Components/Sidebar";
import { BsPlusLg } from "react-icons/bs";

const AddTasks = () => {
  return (
    <div className="flex justify-center min-h-screen">
      <Sidebar />
      <div className="flex-1 max-w-5xl p-16 pr-10">
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-black">
          <BsPlusLg />
          <h2 className="text-lg font-semibold ml-2">Add Tasks</h2>
        </div>
        <div className="grid grid-cols-1 grid-rows-3 gap-4 grid-flow-row-dense">
          <div className="p-4 pr-6 bg-white border-l-8 border-transparent rounded-md shadow-md space-y-2">
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
           rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Add Title"
              required
            />
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-00 
              focus:border-gray-100"
              placeholder="Write your thoughts here..."
            ></textarea>
            <button
              className="relative inline-flex p-0.5 mb-2 mr-2 overflow-hidden w-full text-sm font-medium text-gray-900 
              rounded-lg bg-gray-100 hover:text-gray-900"
            >
              <span
                className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-50 rounded-md w-full
               group-hover:bg-opacity-0"
              >
                Add Tasks
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTasks;
