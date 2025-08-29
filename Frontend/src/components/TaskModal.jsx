import React, { useState } from 'react';


export default function TaskModal({ task, onClose, onSave }) {
const [form, setForm] = useState(task || { title: '', description: '', status: 'To Do', priority: 'Low', assignedTo: '', dueDate: '' });


const handleSubmit = (e) => {
e.preventDefault();
if (!form.title.trim()) return;
onSave(form);
};


return (
<div className="modal">
<div className="modal-content">
<h3>{task ? 'Edit Task' : 'New Task'}</h3>
<form onSubmit={handleSubmit}>
<input
placeholder="Title"
value={form.title}
onChange={(e) => setForm({ ...form, title: e.target.value })}
required
style={{marginBottom:"5px",height:"25px",width:"95%"}}
/>

<textarea
placeholder="Description"
value={form.description}
onChange={(e) => setForm({ ...form, description: e.target.value })}
style={{marginBottom:"5px",height:"25px",width:"95%"}}
/>
<select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} 
style={{marginBottom:"5px",height:"25px",width:"52%"}}>
<option>To Do</option>
<option>In Progress</option>
<option>Done</option>
</select>
<select value={form.priority} onChange={(e) => setForm({ ...form, priority: e.target.value })}
    style={{marginBottom:"5px",height:"25px",width:"42%", marginLeft:"10px"}}>
<option>Low</option>
<option>Medium</option>
<option>High</option>
</select>
<input
placeholder="Assigned To"
value={form.assignedTo}
onChange={(e) => setForm({ ...form, assignedTo: e.target.value })}
style={{marginBottom:"5px",height:"25px",width:"50%"}}
/>
<input
type="date"
value={form.dueDate?.slice(0,10) || ''}
onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
style={{marginBottom:"5px",height:"25px",width:"40%",marginLeft:"10px"}}
/>


<div className="actions">
<button type="submit">Save</button>
<button type="button" onClick={onClose}>Cancel</button>
</div>
</form>
</div>
</div>
);
}