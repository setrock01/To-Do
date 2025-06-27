import { useUser } from "./context/UserContext";
import UserSelect from "./pages/UserSelect";
import TaskPage from "./pages/TaskPage";
import { useState } from "react";

export default function App() {
  const { currentUser } = useUser();
  const [ready, setReady] = useState(false);

  if (!currentUser || !ready) {
    return <UserSelect onSelect={() => setReady(true)} />;
  }

  return <TaskPage />;
}
