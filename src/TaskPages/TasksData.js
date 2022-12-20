import React, { useState, useEffect } from "react";

import TaskItems from "./TaskItems";

// const DUMMY_DATA = [
//   {
//     id: "t1",
//     title: "Do some code first",
//     description: "Define your variables before coding",
//     date: "15-12-2022",
//   },
//   {
//     id: "t2",
//     title: "I want to code music player first",
//     description: "I push it to github",
//     date: "16-12-2022",
//   },
//   {
//     id: "t3",
//     title: "Do some code first",
//     description: "Define your variables before coding",
//     date: "17-12-2022",
//   },
//   {
//     id: "t11",
//     title: "Do some code first",
//     description: "Define your variables before coding",
//     date: "15-12-2022",
//   },
//   {
//     id: "t22",
//     title: "I want to code music player first",
//     description: "I push it to github",
//     date: "16-12-2022",
//   },
//   {
//     id: "t33",
//     title: "Do some code first",
//     description: "Define your variables before coding",
//     date: "17-12-2022",
//   },
//   {
//     id: "t12",
//     title: "Do some code first",
//     description: "Define your variables before coding",
//     date: "15-12-2022",
//   },
//   {
//     id: "t32",
//     title: "I want to code music player first",
//     description: "I push it to github",
//     date: "16-12-2022",
//   },
//   {
//     id: "t34",
//     title: "Do some code first",
//     description: "Define your variables before coding",
//     date: "17-12-2022",
//   },
//   {
//     id: "t14",
//     title: "Do some code first",
//     description: "Define your variables before coding",
//     date: "15-12-2022",
//   },
//   {
//     id: "t24",
//     title: "I want to code music player first",
//     description: "I push it to github",
//     date: "16-12-2022",
//   },
//   {
//     id: "t35",
//     title: "Do some code first",
//     description: "Define your variables before coding",
//     date: "17-12-2022",
//   },
// ];

const TasksData = () => {
  const [taskMade, setTaskMade] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(
        "https://to-do-list-bb34f-default-rtdb.firebaseio.com/tasks.json"
      );
      const responseData = await response.json();

      const loadedTasks = [];

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

  const taskList = taskMade.map((task) => (
    <TaskItems
      id={task.id}
      key={task.id}
      title={task.title}
      description={task.description}
      date={task.date}
    />
  ));

  return <div>{taskList}</div>;
};

export default TasksData;
