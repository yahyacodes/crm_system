import { Route, Routes } from "react-router-dom";

import "./App.css";
import AddTasks from "./TaskPages/AddTasks";
import Completed from "./TaskPages/Completed";
import Tasks from "./TaskPages/Tasks";

const App = () => {
  return (
    <div className="container top-2">
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/add-tasks" element={<AddTasks />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </div>
  );
};

export default App;
