import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddTask from './components/AddTask';
import CategoryFilter from './components/CategoryFilter';
import AllTasks from './pages/AllTask';
import CategoryTasks from './pages/CategoryTask';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Add Task function
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Remove Task function
  const removeTask = (taskToRemove) => {
    setTasks(tasks.filter((task) => task !== taskToRemove));
  };

  // Edit Task function
  const editTask = (taskToEdit, updatedName) => {
    setTasks(
      tasks.map((task) =>
        task === taskToEdit ? { ...task, name: updatedName } : task
      )
    );
  };

  return (
    <Router>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Task Manager</h1>
        <AddTask addTask={addTask} />
        <CategoryFilter />
        <Routes>
          <Route
            path="/"
            element={
              <AllTasks
                tasks={tasks}
                removeTask={removeTask}
                editTask={editTask}
              />
            }
          />
          <Route
            path="/category/:category"
            element={
              <CategoryTasks
                tasks={tasks}
                removeTask={removeTask}
                editTask={editTask}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
