// Add Tasks, will allow user to add tasks and
// This will add the tasks to the database
// This page exists as a router
import React, { useRef, useState } from "react";

// Importing Sidebar
import Sidebar from "../Components/Sidebar";
// Importing icons from React-icons
import { BsPlusLg } from "react-icons/bs";

// Add Tasks component
const AddTasks = () => {
  // Clearing fields on sumbit
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  // Adding tasks to database
  async function addTaskHandler(task) {
    const response = await fetch(
      "https://to-do-list-bb34f-default-rtdb.firebaseio.com/tasks.json",
      {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // Displaying data on UI
    const data = await response.json();
  }

  // Giving refs to allow data addition to database
  const titleRef = useRef("");
  const descriptionRef = useRef("");
  const dateRef = useRef("");

  // Form submition handler
  const submitHandler = (event) => {
    event.preventDefault();
    setTitleInput("");
    setDescriptionInput("");

    // Allowing the submited data to add to database
    const task = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      date: dateRef.current.value,
    };
    addTaskHandler(task);
  };

  // Returning Add Tasks component
  return (
    <div className="flex justify-center md:ml-0 lg:ml-0 xl:ml-72 2xl:ml-60 sm:ml-0">
      {/* Displaying Sidebar */}
      <Sidebar />
      <div className="flex-1 max-w-5xl md:p-5 md:pr-5 xl:pr-2 sm:p-0 sm:pr-0 sm:mt-20">
        {/* Displaying Add Tasks page Header */}
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-black">
          <BsPlusLg />
          <h2 className="text-lg font-semibold ml-2">Add Tasks</h2>
        </div>
        {/* Adding tasks form */}
        <form onSubmit={submitHandler} className="grid grid-cols-1">
          <div className="p-4 pr-6 bg-white border-l-8 border-transparent rounded-md shadow-md space-y-2">
            {/* Title input */}
            <input
              ref={titleRef}
              value={titleInput}
              onChange={(event) => setTitleInput(event.target.value)}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Add Title"
              required
            />
            {/* Description textarea */}
            <textarea
              ref={descriptionRef}
              value={descriptionInput}
              onChange={(event) => setDescriptionInput(event.target.value)}
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-00 
              focus:border-gray-100"
              placeholder="Write your thoughts here..."
            ></textarea>
            {/* Submition button */}
            <button
              className="block px-5 py-2.5 transition-all ease-in duration-75 bg-gray-50 rounded-md w-full
             group-hover:bg-opacity-0"
            >
              Add Tasks
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Exporting the component
export default AddTasks;
