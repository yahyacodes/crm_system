// Importing routes from react-router-dom
import { Route, Routes } from "react-router-dom";

import "./App.css";
// Importing Add Tasks & Tasks
import AddTasks from "./TaskPages/AddTasks";
import Tasks from "./TaskPages/Tasks";

// App component
const App = () => {
  // Rerturning app component
  return (
    <div className="container top-2">
      {/* Allowing routes to function */}
      <Routes>
        {/* Tasks route */}
        <Route path="/" element={<Tasks />} />
        {/* Add Tasks route */}
        <Route path="/add-tasks" element={<AddTasks />} />
      </Routes>
    </div>
  );
};

// Exporting the component
export default App;
