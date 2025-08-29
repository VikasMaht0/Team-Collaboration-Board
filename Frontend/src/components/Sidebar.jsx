import React, { useState } from 'react';
import "./Sidebar.css";



export default function Sidebar({ boards, activeBoard, setActiveBoard, onCreateBoard }) {
const [boardName, setBoardName] = useState("");


const handleSubmit = (e) => {
e.preventDefault();
if (!boardName.trim()) return;
onCreateBoard(boardName);
setBoardName("");
};


return (
<div className="sidebar">
<h1>Boards</h1>

<form onSubmit={handleSubmit} className="search-form">
<input
value={boardName}
onChange={(e) => setBoardName(e.target.value)}
placeholder="New board"
 className="search-input"
/>
<button type="submit" className="search-button">+</button>
</form>
<ul>
{boards.map((b) => (
<li
key={b._id}
className={activeBoard?._id === b._id ? "active" : ""}
onClick={() => setActiveBoard(b)}
>
{b.name}
</li>
))}
</ul>

</div>
);
}



