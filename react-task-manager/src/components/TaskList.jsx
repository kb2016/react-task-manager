import TaskCard from "./TaskCard";

function TaskList({ tasks, deleteTask, toggleComplete }) {
  return (
    <div className="task-grid">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
}

export default TaskList;
