import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TaskCard from "../components/TaskCard";

function TasksPage() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4">
        <h1>Tasks: {tasks.length}</h1>
        <Link
          to="/create-task"
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm"
        >
          Create Task
        </Link>
      </header>
      <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TasksPage;
