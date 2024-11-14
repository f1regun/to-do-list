import { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar.jsx'
import TaskBox from './TaskBox.jsx'


export default function App() {
  const [filterByCategory, setFilterByCategory] = useState('All');
  const [categories, setCategories] = useState([
    'education',
    'work',
    'sport',
  ]);

  return (
    <div className="wrapper">
      <TaskBox categories={categories} filterByCategory={filterByCategory} />
      <Sidebar categories={categories} setCategories={setCategories} setFilterByCategory={setFilterByCategory}/>     
    </div>      
  );
}

