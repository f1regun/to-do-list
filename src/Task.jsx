export default function Task({ task, deleteTask, handleCheckboxChange}) {
    return (
      <div className={task.completed ? 'completedTask' : 'task'}>
        <input className='checkbox' type="checkbox" checked={task.completed} onChange={handleCheckboxChange} />
        <p className="taskText">{task.text}</p>
        <p className="taskCategory">{task.category}</p>
        <img className="deleteBtn" src="src/assets/trashcan.png" alt="Delete" width="40" height="40" onClick={deleteTask}></img>
      </div>
    );
}
  