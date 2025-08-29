const API = import.meta.env.VITE_API_BASE || 'http://localhost:4000';


export const fetchBoards = async () => (await fetch(`${API}/boards`)).json();
export const createBoard = async (name) => fetch(`${API}/boards`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name }) });
export const fetchTasks = async (boardId) => (await fetch(`${API}/boards/${boardId}/tasks`)).json();
export const createTask = async (boardId, task) => fetch(`${API}/boards/${boardId}/tasks`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(task) });
export const updateTask = async (id, updates) => fetch(`${API}/tasks/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(updates) });
export const deleteTask = async (id) => fetch(`${API}/tasks/${id}`, { method: 'DELETE' });
