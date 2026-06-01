function TaskCard({ task, deleteTask, toggleComplete }) {
  return (
    <div className={`task-card ${task.completed ? "completed" : ""}`}>
      <h3>{task.title}</h3>

      <p>
        Priority:
        <strong> {task.priority}</strong>
      </p>

      <div className="actions">
        <button onClick={() => toggleComplete(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskCard;
