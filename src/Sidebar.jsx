import { useState } from 'react'

export default function Sidebar({ tasks, setTasks, categories, setCategories, setFilterByCategory, setSelectedCategory }) {
    const [newCategory, setNewCategory] = useState('');
  
    function handleSubmit(e) {
      e.preventDefault();
      setCategories((prevCategories) => [...prevCategories, newCategory]);
      setNewCategory("");
    }
  
    function deleteCategory(category, index) {
      if (confirm('You have unfulfilled tasks in this category which will be deleted, are you sure?')) {
        setTasks(tasks.filter((task) => task.category !== category));
        setCategories(categories.filter((_, categoryIndex) => categoryIndex !== index));
        setFilterByCategory('All');
        setSelectedCategory('');
      }
    };
  
    return (
      <div className="Sidebar">
        <form onSubmit={handleSubmit} className="addCategoryForm">
          <input value={newCategory} onChange={(e) => setNewCategory(e.target.value)} type="text" className="addCategoryInput" placeholder="Add new category" required />
          <button type="submit" className="submitBtn">Add category</button>
        </form>
        <button onClick={() => setFilterByCategory('All')} className='allCategoriesBtn'>
            All categories
        </button>
        <button onClick={() => setFilterByCategory('no category')} className='allCategoriesBtn'>
            Without category
        </button>
        {categories.map((category, index) => (
          <div className="category" key={index}>
          <button className='categoryBtn' onClick={() => setFilterByCategory(category)}>
            {category}
          </button>
          <img className='deleteCategoryBtn' src="src/assets/trashcan.png" alt="Delete" width="20" height="20" onClick={() => deleteCategory(category, index)}></img>
          </div>
        ))}
      </div>
    )
}