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
import { useLocalStorage } from "@/hooks/localStorage";

export function CreateProject({ setProjects }: any) {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const { getItem, setItem } = useLocalStorage();

  const handleAddProject = () => {
    if (!projectName.trim()) {
      alert("Please enter the project name!");
      return;
    }

    const newProject = {
      id: Date.now(),
      name: projectName,
      description: projectDescription || "",
      tasks: { todo: [], inProgress: [], done: [] },
    };

    const storedProjects = getItem("projects");
    setItem("projects", [...storedProjects, newProject]);

    setProjectName("");
    setProjectDescription("");

    alert("Project added successfully!");

    setProjects([...storedProjects, newProject]);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add New Project</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Add New Project</DialogTitle>
          <DialogDescription>
            Enter the project name and description, then click "Add".
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="projectName" className="text-right">
              Project Name
            </Label>
            <Input
              id="projectName"
              value={projectName}
              onChange={e => setProjectName(e.target.value)}
              placeholder="Enter the project name"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="projectDescription" className="text-right">
              Project Description
            </Label>
            <Input
              id="projectDescription"
              value={projectDescription}
              onChange={e => setProjectDescription(e.target.value)}
              placeholder="Enter the project description (optional)"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleAddProject}>
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
