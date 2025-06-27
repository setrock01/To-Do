import { users } from "../data/users";
import { useUser } from "../context/UserContext";

export default function UserSelect({ onSelect }) {
  const { setCurrentUser } = useUser();

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-6 bg-gray-100">
      <h1 className="text-2xl font-bold">🧑 Selecciona tu usuario</h1>
      <div className="flex gap-4">
        {users.map((user) => (
          <button
            key={user.username}
            onClick={() => {
              setCurrentUser(user);
              onSelect();
            }}
            className="bg-white border px-6 py-2 rounded-lg shadow hover:bg-gray-50"
          >
            {user.username}
          </button>
        ))}
      </div>
    </div>
  );
}
