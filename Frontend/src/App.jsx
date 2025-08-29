import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import BoardView from './components/BoardView';
import Header from './components/Header'; 
import { fetchBoards, createBoard } from './api/api';


export default function App() {
const [boards, setBoards] = useState([]);
const [activeBoard, setActiveBoard] = useState(null);


useEffect(() => {
loadBoards();
}, []);

const loadBoards = async () => {
const data = await fetchBoards();
setBoards(data);
if (data.length && !activeBoard) setActiveBoard(data[0]);
};


const handleCreateBoard = async (name) => {
await createBoard(name);
loadBoards();
};

return (
<div>
 
 <div>
     <Header activeBoard={activeBoard} />
 </div>

<div className="app-container">
    
<Sidebar
boards={boards}
activeBoard={activeBoard}
setActiveBoard={setActiveBoard}
onCreateBoard={handleCreateBoard}
/>
{activeBoard && <BoardView board={activeBoard} />}
</div>
</div>
);
}