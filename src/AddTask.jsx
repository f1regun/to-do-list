import { useState, useEffect } from 'react'

export default function AddTask({ tasks, setTasks, categories, filterByCategory, selectedCategory, setSelectedCategory }) {
    const [newTask, setNewTask] = useState('');
  
    function handleSubmit(e) {
      e.preventDefault();
      if (tasks.some(
        (task) => task.text === newTask && task.category === selectedCategory
      )) {
        alert('You already have this task');
      } else {
        setTasks((prevTasks) => [{text: newTask, category: selectedCategory || '', completed: false}, ...prevTasks]);
      }
      setNewTask("");
    }

    function selectOptions(filterByCategory, categories) {
      if (filterByCategory === 'All') {
        return (
        <>
          <option value="">no category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </>
      );
      } else if (filterByCategory === 'no category') {
        return <option value="">no category</option>;
      } else {
        return <option value={filterByCategory}>{filterByCategory}</option>;
      }
    }
  
    return (
      <form onSubmit={handleSubmit} className="addTaskForm">
        <input value={newTask} onChange={(e) => setNewTask(e.target.value)} type="text" className="addTaskInput" placeholder="Add new task" required/>
        <select onChange={(e) => setSelectedCategory(e.target.value)} className="addTaskSelect">
          {selectOptions(filterByCategory, categories)}   
        </select>
        <button type="submit" className="submitBtn">Add task</button>
      </form>
    );
}
  