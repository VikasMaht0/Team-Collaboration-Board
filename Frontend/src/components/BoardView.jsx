import React, { useState, useEffect } from 'react';
import TaskCard from './TaskCard';
import TaskModal from './TaskModal';
import { fetchTasks, createTask, updateTask, deleteTask } from '../api/api';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const statuses = ["To Do", "In Progress", "Done"];

export default function BoardView({ board }) {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    loadTasks();
  }, [board]);

  const loadTasks = async () => {
    const data = await fetchTasks(board._id);
    setTasks(data);
  };

  const handleCreateTask = async (task) => {
    await createTask(board._id, task);
    loadTasks();
  };

  const handleUpdateTask = async (id, updates) => {
    await updateTask(id, updates);
    loadTasks();
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  // 🔹 Handle drag end
  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;

    // If dropped in same column & position -> do nothing
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const draggedTask = tasks.find((t) => t._id === draggableId);

    if (draggedTask) {
      // Only update if status changed
      if (draggedTask.status !== destination.droppableId) {
        handleUpdateTask(draggedTask._id, { status: destination.droppableId });
      }
    }
  };

  return (
    <div className="board-view">
      <DragDropContext onDragEnd={onDragEnd}>
        {statuses.map((status) => (
          <Droppable droppableId={status} key={status}>
            {(provided) => (
              <div
                className="column"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h3>{status}</h3>
                {tasks
                  .filter((t) => t.status === status)
                  .map((t, index) => (
                    <Draggable key={t._id} draggableId={t._id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <TaskCard
                            task={t}
                            onEdit={() => {
                              setEditingTask(t);
                              setShowModal(true);
                            }}
                            onDelete={() => handleDeleteTask(t._id)}
                            onStatusChange={(newStatus) =>
                              handleUpdateTask(t._id, { status: newStatus })
                            }
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
                <button
                  onClick={() => {
                    setEditingTask(null);
                    setShowModal(true);
                  }}
                >
                  + Add Task
                </button>
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>

      {showModal && (
        <TaskModal
          task={editingTask}
          onClose={() => setShowModal(false)}
          onSave={(task) => {
            editingTask
              ? handleUpdateTask(editingTask._id, task)
              : handleCreateTask(task);
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
}
