const express = require('express');
const { getTasksByBoard, createTask, updateTask, deleteTask } = require('../controllers/taskController');
const router = express.Router();


router.get('/boards/:id/tasks', getTasksByBoard);
router.post('/boards/:id/tasks', createTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);


module.exports = router;