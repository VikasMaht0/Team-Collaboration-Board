const Task = require('../models/Task');
const mongoose = require('mongoose');


exports.getTasksByBoard = async (req, res, next) => {
try {
const { id } = req.params;
if (!mongoose.isValidObjectId(id)) return res.status(400).json({ message: 'Invalid board id' });


const { status } = req.query;
const query = { boardId: id };
if (status) query.status = status;


const tasks = await Task.find(query).sort({ createdAt: -1 });
res.json(tasks);
} catch (err) {
next(err);
}
};

exports.createTask = async (req, res, next) => {
try {
const { id } = req.params;
if (!mongoose.isValidObjectId(id)) return res.status(400).json({ message: 'Invalid board id' });


const task = await Task.create({ ...req.body, boardId: id });
res.status(201).json(task);
} catch (err) {
next(err);
}
};


exports.updateTask = async (req, res, next) => {
try {
const { id } = req.params;
if (!mongoose.isValidObjectId(id)) return res.status(400).json({ message: 'Invalid task id' });


const task = await Task.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
if (!task) return res.status(404).json({ message: 'Task not found' });
res.json(task);
} catch (err) {
next(err);
}
};


exports.deleteTask = async (req, res, next) => {
try {
const { id } = req.params;
if (!mongoose.isValidObjectId(id)) return res.status(400).json({ message: 'Invalid task id' });


const task = await Task.findByIdAndDelete(id);
if (!task) return res.status(404).json({ message: 'Task not found' });
res.json({ message: 'Task deleted', id });
} catch (err) {
next(err);
}
};