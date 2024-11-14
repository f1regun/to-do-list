import { useState } from 'react'
import Task from './Task.jsx'
import AddTask from './AddTask.jsx'

export default function TaskBox({ categories, filterByCategory }) {
    const [tasks, setTasks] = useState([]);
  
    const filteredTasks = filterByCategory === 'All'
      ? tasks
      : filterByCategory === 'no category'
      ? tasks.filter(task => task.category === '')
      : tasks.filter(task => task.category === filterByCategory);
  
    function deleteTask(index) {
      setTasks(tasks.filter((task, taskIndex) => taskIndex !== index));
    };
  
    function handleCheckboxChange(index) {
      setTasks(tasks.map((task, i) =>
          i === index ? { ...task, completed: !task.completed } : task
      ));
    };
  
    return (
      <div className="taskBox">
        <AddTask categories={categories} setTasks={setTasks}/>
        {filteredTasks.map((task, index) => (
          <Task key={index} task={task} taskText={task.text} taskCategory={task.category} checked={task.completed} deleteTask={() => deleteTask(index)} handleCheckboxChange={() => handleCheckboxChange(index)}/>
        ))}
      </div>
    );
}