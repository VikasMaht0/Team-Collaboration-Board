const mongoose = require('mongoose');

const STATUS = ['To Do', 'In Progress', 'Done'];
const PRIORITY = ['Low', 'Medium', 'High'];


const taskSchema = new mongoose.Schema(
{
title: { type: String, required: true, trim: true, maxlength: 120 },
description: { type: String, trim: true, default: '' },
status: { type: String, enum: STATUS, default: 'To Do' },
priority: { type: String, enum: PRIORITY, default: 'Medium' },
assignedTo: { type: String, trim: true, default: '' },
dueDate: { type: Date },
boardId: { type: mongoose.Schema.Types.ObjectId, ref: 'Board', required: true },
},
{ timestamps: true }
);


module.exports = mongoose.model('Task', taskSchema);