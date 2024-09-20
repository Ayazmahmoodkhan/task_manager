import React, { useState } from 'react';

const TaskList = ({ tasks, removeTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [editedTask, setEditedTask] = useState("");

  const handleEdit = (task) => {
    setIsEditing(task);
    setEditedTask(task.name);
  };

  const handleSave = (task) => {
    editTask(task, editedTask);
    setIsEditing(null); // Exit edit mode
  };

  return (
    <ul className="list-group">
      {tasks.map((task, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
          {isEditing === task ? (
            <input
              type="text"
              value={editedTask}
              onChange={(e) => setEditedTask(e.target.value)}
              className="form-control"
            />
          ) : (
            <>
              {task.name} <span className="badge bg-secondary">{task.category}</span>
            </>
          )}
          <div>
            {isEditing === task ? (
              <button
                className="btn btn-success btn-sm me-2"
                onClick={() => handleSave(task)}
              >
                Save
              </button>
            ) : (
              <button
                className="btn btn-primary btn-sm me-2"
                onClick={() => handleEdit(task)}
              >
                Edit
              </button>
            )}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeTask(task)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
