import { useState } from 'react'
import Task from './Task.jsx'
import AddTask from './AddTask.jsx'

export default function TaskBox({ tasks, setTasks, categories, filterByCategory, selectedCategory, setSelectedCategory }) {
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
        <n1 className="categoryTitle">{filterByCategory} tasks</n1>
        <AddTask selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} tasks={tasks} categories={categories} setTasks={setTasks} filterByCategory={filterByCategory} />
        {filteredTasks.map((task, index) => (
          <Task key={index} task={task} taskText={task.text} taskCategory={task.category} checked={task.completed} deleteTask={() => deleteTask(index)} handleCheckboxChange={() => handleCheckboxChange(index)}/>
        ))}
      </div>
    );
}