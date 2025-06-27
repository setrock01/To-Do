import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import { v4 as uuidv4 } from "uuid";

export default function TaskPage() {
  const { currentUser, logout } = useUser();
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Cargar tareas al iniciar
  useEffect(() => {
    const saved = localStorage.getItem(`tasks-${currentUser.username}`);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, [currentUser.username]);

  // Guardar tareas cada vez que cambien
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
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-sky-400 text-white px-6 py-8">
      <div className="max-w-3xl mx-auto bg-white/80 text-gray-800 rounded-2xl p-8 shadow-xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-extrabold flex items-center gap-2">
            📝 Tareas de <span className="text-blue-600">{currentUser.username}</span>
          </h2>
          <button
            onClick={logout}
            className="text-sm font-medium text-blue-600 hover:underline transition"
          >
            Cerrar sesión
          </button>
        </div>

        <div className="flex gap-3 mb-6">
          <input
            className="flex-1 px-4 py-3 bg-white rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Escribe una nueva tarea..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all shadow"
          >
            Añadir
          </button>
        </div>

        <ul className="space-y-4">
          {tasks.length === 0 ? (
            <p className="text-gray-500 text-center">No tienes tareas aún. ¡Empieza creando una! 🎯</p>
          ) : (
            tasks.map((task) => (
              <li
                key={task.id}
                className={`flex justify-between items-center px-5 py-4 rounded-xl border shadow-sm transition ${
                  task.done
                    ? "bg-green-100 line-through text-gray-500"
                    : "bg-white hover:bg-blue-50"
                }`}
              >
                <span
                  onClick={() => toggleTask(task.id)}
                  className="cursor-pointer flex-1 text-lg"
                >
                  {task.text}
                </span>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-500 hover:text-red-700 text-xl"
                >
                  ❌
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
