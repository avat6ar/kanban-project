import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreateTaskProps } from "..";

export function CreateTask({ column, tasks, setTasks }: CreateTaskProps) {
  const [taskName, setTaskName] = useState("");

  const handleAddTask = () => {
    if (!taskName.trim()) {
      alert("Please enter the task name!");
      return;
    }

    const newTask = {
      id: Date.now(),
      name: taskName,
    };

    const updatedTasks = {
      ...tasks,
      [column]: [...tasks[column], newTask],
    };

    setTasks(updatedTasks);
    setTaskName("");
    };

  return (
    <div className="flex gap-2 mt-3">
      <Button type="button" variant="default" onClick={handleAddTask}>
        Add
      </Button>
      <Input
        id="taskName"
        value={taskName}
        onChange={e => setTaskName(e.target.value)}
        placeholder="Enter the task name"
        className="col-span-3"
      />
    </div>
  );
}
