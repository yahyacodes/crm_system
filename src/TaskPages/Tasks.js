import React, { Fragment } from "react";

import Sidebar from "../Components/Sidebar";
import TasksData from "./TasksData";

const Tasks = () => {
  return (
    <Fragment>
      <Sidebar />
      <TasksData />
    </Fragment>
  );
};

export default Tasks;
