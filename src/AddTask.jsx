import { useState } from 'react'

export default function AddTask({ setTasks, categories }) {
    const [newTask, setNewTask] = useState('');
    const [selectedCategory, setSelectedCategory] = useState();
  
    function handleSubmit(e) {
      e.preventDefault();
      setTasks((prevTasks) => [{text: newTask, category: selectedCategory || '', completed: false}, ...prevTasks]);
      setNewTask("");
    }
  
    return (
      <form onSubmit={handleSubmit} className="addTaskForm">
        <input value={newTask} onChange={(e) => setNewTask(e.target.value)} type="text" className="addTaskInput" placeholder="Add new task" required/>
        <select onChange={(e) => setSelectedCategory(e.target.value)} className="addTaskSelect">
          <option value="">no category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
            {category}
            </option>
          ))}       
        </select>
        <button type="submit" className="submitBtn">Add task</button>
      </form>
    );
}
  