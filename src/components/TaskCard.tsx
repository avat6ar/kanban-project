import { Trash } from "lucide-react";
import { Task, TaskColumns } from "..";
import { Button } from "./ui/button";

interface TaskCardProps {
  item: Task;
  onDelete: (taskId: string, column: keyof TaskColumns) => void;
  column: keyof TaskColumns;
}

const TaskCard = ({ item, onDelete, column }: TaskCardProps) => {
  const handleDelete = () => {
    onDelete(item.id, column);
  };

  return (
    <div className="flex flex-col justify-center items-start px-4 py-2 bg-white mt-4 rounded-md">
      <p>{item.name}</p>
      <div className="flex justify-between items-center w-full text-xs font-medium text-[#7D7D7D]">
        <p className="py-1 px-3 bg-green-500/10 rounded-xl mt-2 text-green-500">
          <span>
            {new Date(item.id).toLocaleDateString("en-us", {
              month: "long",
              day: "2-digit",
            })}
          </span>
        </p>
        <Button variant={"ghost"} onClick={handleDelete}>
          <Trash className="w-5 text-red-500" />
        </Button>
      </div>
    </div>
  );
};

export default TaskCard;
