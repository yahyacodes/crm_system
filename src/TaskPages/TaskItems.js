//This will render the fetched data from <TaskData/>
import React, { useState } from "react";

// importing close icon to delete tasks from database
import { AiOutlineClose } from "react-icons/ai";

// Task Items component
const TaskItems = (props) => {
  const [isDone, setIsDone] = useState(false);

  // Adds border to completed Tasks on double click
  const completeTaskHandler = () => {
    setIsDone(true);
  };

  // Adds date on tasks added to database
  const dateDisplay = new Date();

  // Deletes tasks from both UI and the database
  const deleteTask = () => {
    fetch(
      `https://to-do-list-bb34f-default-rtdb.firebaseio.com/tasks/${props.id}.json`,
      {
        method: "DELETE",
      }
    )
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // Displayes the fetch data on <TaskData/>
  return (
    <>
      <div className="flex justify-center md:ml-0 sm:ml-0 xl:ml-80">
        <div className="flex-1 max-w-5xl p-2">
          <div className="grid grid-cols-1 gap-4">
            {/* Adds border when double clicked if Done */}
            <div
              className={`p-4 pr-6 bg-white border-l-8 ${
                !isDone ? "border-transparent" : "border-teal-400"
              } rounded-md shadow-md space-y-2 cursor-pointer`}
              onDoubleClick={completeTaskHandler}
            >
              {/* Displays the fetched Task tile */}
              <div className="grid grid-cols-2">
                <h1 className="font-medium text-gray-900 truncate">
                  {props.title}
                </h1>
                {/* Deletes Tasks from both UI and database */}
                <AiOutlineClose
                  className="flex lg:ml-80 md:ml-60 cursor-pointer sm:ml-40"
                  onClick={deleteTask}
                />
              </div>
              {/* Displays descripton of the Task fetched */}
              <p className="text-base text-gray-500 truncate dark:text-gray-400">
                {props.description}
              </p>
              {/* Adds new Date dynamically after Task is added */}
              <div className="flex underline text-xs font-semibold text-gray-300">
                {dateDisplay.toLocaleDateString("en-UK")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Exporting the component
export default TaskItems;
