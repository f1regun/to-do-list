import { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar.jsx'
import TaskBox from './TaskBox.jsx'


export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filterByCategory, setFilterByCategory] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState();
  const [categories, setCategories] = useState([
    'education',
    'work',
    'sport',
  ]);

  return (
    <div className="wrapper">
      <TaskBox 
        tasks={tasks}
        setTasks={setTasks}
        categories={categories} 
        filterByCategory={filterByCategory} 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Sidebar 
        tasks={tasks}
        setTasks={setTasks}
        categories={categories} 
        setCategories={setCategories} 
        setFilterByCategory={setFilterByCategory}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />     
    </div>      
  );
}

