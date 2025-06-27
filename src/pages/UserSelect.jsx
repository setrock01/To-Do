import { users } from "../data/users";
import { useUser } from "../context/UserContext";

export default function UserSelect({ onSelect }) {
  const { setCurrentUser } = useUser();

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-6 bg-gradient-to-r from-blue-500 to-sky-400">
      {/* Título mejorado con degradado y sombra */}
      <h1 className=" text-7xl font-extrabold drop-shadow-lg mb-8">
        <span className="mr-4" role="img" aria-label="user-emoji">🧑</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 ">Selecciona tu usuario</span>
      </h1>
      
      <div className="flex gap-4">
        {users.map((user) => (
          <button
            key={user.username}
            onClick={() => {
              setCurrentUser(user);
              onSelect();
            }}
            className="bg-white border px-6 py-2 
              rounded-lg shadow hover:bg-blue-200  hover:scale-105
              transition-all duration-300 ease-in-out
              text-lg font-semibold "
          >
            {user.username}
          </button>
        ))}
      </div>
    </div>
  );
}