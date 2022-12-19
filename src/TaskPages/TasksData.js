import React from "react";

import Cards from "../UI/Cards";
import TaskItems from "./TaskItems";

const DUMMY_DATA = [
  {
    id: "t1",
    title: "Do some code first",
    description: "Define your variables before coding",
    date: "15-12-2022",
  },
  {
    id: "t2",
    title: "I want to code music player first",
    description: "I push it to github",
    date: "16-12-2022",
  },
  {
    id: "t3",
    title: "Do some code first",
    description: "Define your variables before coding",
    date: "17-12-2022",
  },
];

const TasksData = () => {
  const taskList = DUMMY_DATA.map((task) => (
    <TaskItems
      id={task.id}
      key={task.id}
      name={task.name}
      description={task.description}
      date={task.date}
    />
  ));

  return (
    <Cards>
      <ul>{taskList}</ul>
    </Cards>
  );
};

export default TasksData;
