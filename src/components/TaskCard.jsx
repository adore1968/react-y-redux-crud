/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../features/tasks/tasksSlice";

function TaskCard({ task }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="bg-neutral-800 p-4 rounded-md">
      <header className="flex justify-between items-center">
        <h3>{task.title}</h3>
        <div className="flex gap-2">
          <Link
            to={`/edit-task/${task.id}`}
            className="bg-zinc-600 px-2 py-1 text-xs rounded-md self-center"
          >
            Update
          </Link>
          <button
            type="button"
            onClick={() => handleDelete(task.id)}
            className="bg-red-500 px-2 py-1 text-xs rounded-md self-center"
          >
            Delete
          </button>
        </div>
      </header>
      <p>{task.description}</p>
    </div>
  );
}

export default TaskCard;
