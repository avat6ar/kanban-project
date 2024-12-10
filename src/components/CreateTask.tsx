import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
    }

    const updatedTasks = {
      ...tasks,
      [column]: [...tasks[column], newTask],
    };

    setTasks(updatedTasks);
    setTaskName("");

    alert("Task added successfully!");
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="mt-3">
        <Button variant="outline">Add Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Enter the task name to add it to the column.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="taskName" className="text-right">
              Task Name
            </Label>
            <Input
              id="taskName"
              value={taskName}
              onChange={e => setTaskName(e.target.value)}
              placeholder="Enter the task name"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleAddTask}>
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
