import React from 'react';
import { useParams } from 'react-router-dom';
import TaskList from '../components/TaskList';

const CategoryTasks = ({ tasks, removeTask, editTask }) => {
  const { category } = useParams();
  const filteredTasks = tasks.filter((task) => task.category === category);

  return (
    <div>
      <h1>{category} Tasks</h1>
      <TaskList tasks={filteredTasks} removeTask={removeTask} editTask={editTask} />
    </div>
  );
};

export default CategoryTasks;
