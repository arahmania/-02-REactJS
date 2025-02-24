import React, { useState } from 'react';

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
          <li key={index}>
            {task} <button onClick={() => handleRemoveTask(index)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
