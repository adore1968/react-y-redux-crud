import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/tasksSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

const taskInitialState = {
  title: "",
  description: "",
};

function FormPage() {
  const [task, setTask] = useState(taskInitialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const tasks = useSelector((state) => state.tasks);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(editTask(task));
    } else {
      dispatch(addTask({ ...task, id: uuid() }));
    }
    setTask(taskInitialState);
    navigate("/");
  };

  useEffect(() => {
    if (id) {
      setTask(tasks.find((task) => task.id === id));
    }
  }, [id, tasks]);

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
      <label htmlFor="title" className="block text-xs font-bold mb-2">
        Task:
      </label>
      <input
        type="text"
        name="title"
        placeholder="title"
        value={task.title}
        onChange={handleChange}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      />
      <label htmlFor="description" className="block text-xs font-bold mb-2">
        Description:
      </label>
      <textarea
        name="description"
        placeholder="description"
        value={task.description}
        onChange={handleChange}
        className="resize-none w-full p-2 rounded-md bg-zinc-600 mb-2"
      ></textarea>
      <button
        type="submit"
        className="bg-indigo-600 px-2 py-1 rounded-md self-center"
      >
        Save
      </button>
    </form>
  );
}

export default FormPage;
