import React, { useState } from "react";
import "./../styles/App.css";
import tasks from "./Data";
import { useMemo } from "react";
const App = () => {
  const [currentTab, setCurrentTab] = useState('All');

  const filteredData = useMemo(() => {
    return currentTab === 'Active' ? tasks.filter(task => task.completed === false) : currentTab === 'Completed' ? tasks.filter(task => task.completed === true) : tasks;
  }, [currentTab])
  return (
    <div>
      <div>
        <button onClick={() => setCurrentTab('All')}>All</button>
        <button onClick={() => setCurrentTab('Active')}>Active</button>
        <button onClick={() => setCurrentTab('Completed')}>Completed</button>
      </div>
      <ul>
        {filteredData.map((task, index) => (
          <li
            key={index}
            style={task.completed ? { textDecoration: "line-through" } : {}}
          >
            {task.task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;