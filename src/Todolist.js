import React, { useState } from 'react';

function TaskItem({ task, onRemove }) {
  return (
    <li>
      {task} <button onClick={onRemove}>Hapus</button>
    </li>
  );
}

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');


  const handleAddTask = () => {
    if (newTask.trim()){
        setTasks([...tasks, newTask]);
        setNewTask('');
    }
  };
  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>List Tugas</h2>
      <input
        type="text"
        placeholder="Tambah list tugas"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Tambah Tugas</button>
      <ul>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            onRemove={() => handleRemoveTask(index)}
          />
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
