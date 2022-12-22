// Tasks Data, this page handles the data fetching
// The data is fetched from firebase's real-time-database
import React, { useState, useEffect } from "react";

// Importing TaskItems
import TaskItems from "./TaskItems";

// TasksData component
const TasksData = () => {
  // Adding tasks made to database
  const [taskMade, setTaskMade] = useState([]);

  // Fetching the data from database
  useEffect(() => {
    // Handling fetch
    const fetchTasks = async () => {
      const response = await fetch(
        "https://to-do-list-bb34f-default-rtdb.firebaseio.com/tasks.json"
      );
      // Handling the response
      const responseData = await response.json();

      const loadedTasks = [];

      // Looping through the fetched data
      for (const key in responseData) {
        loadedTasks.push({
          id: key,
          title: responseData[key].title,
          description: responseData[key].description,
          date: responseData[key].date,
        });
      }
      setTaskMade(loadedTasks);
    };
    fetchTasks();
  }, []);

  // Mapping through the fetched data
  const taskList = taskMade.map((task) => (
    <TaskItems
      id={task.id}
      key={task.id}
      title={task.title}
      description={task.description}
      date={task.date}
    />
  ));

  // Returning the fetched data
  return <div>{taskList}</div>;
};

// Exporting the component
export default TasksData;
