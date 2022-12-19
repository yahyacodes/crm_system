import React from "react";

const TaskItems = (props) => {
  return (
    <li class="pb-3 sm:pb-4">
      <div class="flex items-center space-x-4">
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 truncate">{props.name}</p>
          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
            {props.description}
          </p>
        </div>
        <div class="inline-flex items-center text-xs font-semibold text-gray-300">
          {props.date}
        </div>
      </div>
    </li>
  );
};

export default TaskItems;
