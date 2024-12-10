export interface CreateTaskProps {
  column: keyof TaskColumns;
  tasks: TaskColumns;
  setTasks: (tasks: TaskColumns) => void;
}
export interface TaskColumns {
  todo: Task[];
  inProgress: Task[];
  done: Task[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  tasks: TaskColumns;
}

export interface Task {
  id: string;
  name: string;
}