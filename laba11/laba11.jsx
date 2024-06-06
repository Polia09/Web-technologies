import React, { useState } from 'react';

function TaskList({ tasks, onTaskComplete, onTaskDelete }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} style={{ backgroundColor: task.completed ? 'lightgreen' : 'inherit' }}>
          {task.text}
          <button onClick={() => onTaskComplete(index)}>Выполнить</button>
          <button onClick={() => onTaskDelete(index)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
}

function TaskApp() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleTaskComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleTaskDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Планировщик задач</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTask}>Добавить задачу</button>
      <TaskList tasks={tasks} onTaskComplete={handleTaskComplete} onTaskDelete={handleTaskDelete} />
    </div>
  );
}

export default TaskApp;
