export type Task = {
  id: string;
  text: string;
  done: boolean;
};

export type User = {
  username: string;
  tasks: Task[];
};