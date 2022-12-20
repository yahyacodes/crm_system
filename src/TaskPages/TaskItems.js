import React, { useState } from "react";

const TaskItems = (props) => {
  const [hoverOn, setHoverOn] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleMouseOver = () => {
    setHoverOn(true);
  };

  const handleMouseOut = () => {
    setHoverOn(false);
  };

  const completeTaskHandler = () => {
    setIsDone(true);
  };

  return (
    <>
      <div className="flex justify-center ml-20">
        <div className="flex-1 max-w-5xl p-2 ml-10">
          <div className="grid grid-cols-2 gap-4">
            {!isDone && (
              <div
                className="p-4 pr-6 bg-white border-l-8 border-transparent rounded-md shadow-md space-y-2"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <h1 className="font-medium text-gray-900 truncate">
                  {props.title}
                </h1>
                <p className="text-base text-gray-500 truncate dark:text-gray-400">
                  {props.description}
                </p>
                <div className="inline-flex ml-80 text-xs font-semibold text-gray-300">
                  {props.date}
                </div>
                <div>
                  {hoverOn && (
                    <button
                      onClick={completeTaskHandler}
                      type="button"
                      className="ml-30 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border
                  border-gray-200 hover:bg-gray-100 hover:text-teal-400 focus:z-10 focus:ring-4 focus:ring-gray-200"
                    >
                      Complete Task
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskItems;
