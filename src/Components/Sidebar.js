import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { BsAppIndicator } from "react-icons/bs";
import { BsViewList } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";
import { BsCheckLg } from "react-icons/bs";

const Sidebar = () => {
  let [open, setOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
      >
        {open ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <div
        className={`sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-white
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
          <hr className="my-2" />
        </div>

        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-300 text-black">
          <BsViewList />
          <NavLink to="/">
            <span className="text-[15px] ml-4 text-black">Tasks</span>
          </NavLink>
        </div>

        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-300 text-black">
          <BsPlusLg />
          <NavLink to="/add-tasks">
            <span className="text-[15px] ml-4 text-black">Add Tasks</span>
          </NavLink>
        </div>

        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-300 text-black">
          <BsCheckLg />
          <NavLink to="/completed">
            <span className="text-[15px] ml-4 text-black">Completed</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
