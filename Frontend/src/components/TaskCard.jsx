import React from 'react';
import "./TaskCard.css";


export default function TaskCard({ task, onEdit, onDelete, onStatusChange }) {
return (
<div className="task-card">
<h4>{task.title}</h4>
{task.priority && <span className={`badge ${task.priority.toLowerCase()}`}>{task.priority}</span>}
<p>{task.description}</p>
{task.dueDate && <small>Due: {new Date(task.dueDate).toLocaleDateString()}</small>}


<select value={task.status} onChange={(e) => onStatusChange(e.target.value)} style={{marginLeft:"15px",padding:"2px"}}>
<option >To Do</option>
<option >In Progress</option>
<option >Done</option>
</select>

<div className="actions">
<button onClick={onEdit}>Edit</button>
<button onClick={onDelete}>Delete</button>
</div>
</div>
);
}