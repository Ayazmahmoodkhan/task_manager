import React from 'react';
import TaskList from '../components/TaskList';

const AllTasks = ({ tasks, removeTask, editTask }) => {
  return (
    <div>
      <h1>All Tasks</h1>
      <TaskList tasks={tasks} removeTask={removeTask} editTask={editTask} />
    </div>
  );
};

export default AllTasks;
