// Tasks page, this page displays all the tasks
// After fetching the tasks on <TaskData/>
// And hanling the fetched data on <TaskItems/>
import React, { Fragment } from "react";

// Importing Sidebar & TaskData
import Sidebar from "../Components/Sidebar";
import TasksData from "./TasksData";
// Importing icons from React-icons
import { BsViewList } from "react-icons/bs";

// Tasks component
const Tasks = () => {
  // Returning Tasks component
  return (
    <Fragment>
      <div className="flex justify-center ml-20">
        {/* Displaying Sidebar */}
        <Sidebar />
        {/* Displaying Tasks Header */}
        <div className="flex-1 max-w-5xl p-6">
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-black md:ml-0 xl:ml-60 2xl:ml-60">
            <BsViewList />
            <h2 className="text-lg font-semibold md:ml-2 sm:ml-2">
              View Tasks
            </h2>
          </div>
        </div>
      </div>
      {/* Displaying TasksData */}
      <TasksData />
    </Fragment>
  );
};

// Exporting the component
export default Tasks;
