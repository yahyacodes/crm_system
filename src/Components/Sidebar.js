// Creating Sidebar
import React, { useState } from "react";
// Importing Navlinks from react-router-dom
import { NavLink } from "react-router-dom";

// Importing Icons from React-icons
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { BsAppIndicator } from "react-icons/bs";
import { BsViewList } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";

// Sidebar component
const Sidebar = () => {
  // Displaying Menu icon conditionally
  let [open, setOpen] = useState(false);

  // Returning Sidebar component
  return (
    <>
      {/* Displaying menu/close icon conditionally */}
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute right-8 top-6 cursor-pointer xl:hidden"
      >
        {open ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      {/* Fixed Sidebar */}
      <div
        className={`sidebar fixed top-0 bottom-0 xl:left-0 p-2 w-[300px] overflow-y-auto text-center bg-white
        ${open ? "left-0" : "left-[-500px]"}`}
      >
        <div className="text-black text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <div className="px-2 py-1 rounded-md bg-black">
              <BsAppIndicator className="text-white" />
            </div>
            <h1 className="font-bold text-black text-[15px] ml-3">
              Tasks Tracker
            </h1>
          </div>
          <hr className="my-2 border-gray-600" />
        </div>

        {/* Tasks page link */}
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-300 text-black">
          <BsViewList />
          <NavLink to="/">
            <span className="text-[15px] ml-4 text-black">Tasks</span>
          </NavLink>
        </div>

        {/* Add Tasks page link */}
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-300 text-black">
          <BsPlusLg />
          <NavLink to="/add-tasks">
            <span className="text-[15px] ml-4 text-black">Add Tasks</span>
          </NavLink>
        </div>

        {/* Sidebar footer */}
        <footer className="p-4 bg-white absolute inset-x-0 bottom-0 md:px-6 md:py-8">
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022 {/* GitHub account link */}
            <a
              href="https://github.com/yahyacodes"
              className="hover:underline"
              target="blank"
            >
              yahyacodes
            </a>
            . All Rights Reserved.
          </span>
        </footer>
      </div>
    </>
  );
};

// Exporting the component
export default Sidebar;
