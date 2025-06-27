import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import { v4 as uuidv4 } from "uuid";

export default function TaskPage() {
  const { currentUser, logout } = useUser();
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Cargar tareas desde localStorage al entrar
  useEffect(() => {
    const saved = localStorage.getItem(`tasks-${currentUser.username}`);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, [currentUser.username]);

  // Guardar tareas en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem(`tasks-${currentUser.username}`, JSON.stringify(tasks));
  }, [tasks, currentUser.username]);

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    const task = { id: uuidv4(), text: newTask.trim(), done: false };
    setTasks([task, ...tasks]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
        <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">📝 Tareas de {currentUser.username}</h2>
        <button
            onClick={logout}
            className="text-sm text-blue-500 hover:underline"
        >
            Cerrar sesión
        </button>
        </div>
      <div className="flex gap-2 mb-6">
        <input
          className="border px-3 py-2 rounded w-full"
          type="text"
          placeholder="Nueva tarea..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Añadir
        </button>
      </div>

      <ul className="space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center px-4 py-2 rounded border ${
              task.done ? "bg-green-100 line-through text-gray-500" : "bg-white"
            }`}
          >
            <span onClick={() => toggleTask(task.id)} className="cursor-pointer flex-1">
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="ml-4 text-red-500 hover:text-red-700"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
