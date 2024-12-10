import { useState, useEffect } from "react";
import { CreateTask } from "@/components/CreateTask";
import { Project, TaskColumns } from "@/index";
import { useParams } from "react-router-dom";
import { useLocalStorage } from "@/hooks/localStorage";

const View: React.FC = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState<Project | null | undefined>(null);
  const [tasks, setTasks] = useState<TaskColumns>({
    todo: [],
    inProgress: [],
    done: [],
  });

  const { getItem, setItem } = useLocalStorage();

  useEffect(() => {
    const storedProjects: Project[] =  getItem("projects");
    const selectedProject = storedProjects.find(p => p.id == projectId);

    setProject(selectedProject);
    if (selectedProject && selectedProject.tasks) {
      setTasks(selectedProject.tasks);
    }
  }, [, projectId]);

  const saveTasksToLocalStorage = (updatedTasks: TaskColumns) => {
    if (!project) return;

    const storedProjects: Project[] = getItem("projects");
    const updatedProject: Project = { ...project, tasks: updatedTasks };
    const updatedProjects = storedProjects.map(p =>
      p.id === project.id ? updatedProject : p
    );

    setItem("projects", updatedProjects);
  };

  useEffect(() => {
    saveTasksToLocalStorage(tasks);
  }, [tasks]);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    taskId: string,
    column: keyof TaskColumns
  ) => {
    e.dataTransfer.setData("taskId", taskId);
    e.dataTransfer.setData("column", column);
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    targetColumn: keyof TaskColumns
  ) => {
    const taskId = e.dataTransfer.getData("taskId");
    const sourceColumn = e.dataTransfer.getData("column") as keyof TaskColumns;

    if (sourceColumn === targetColumn) return;

    const task = tasks[sourceColumn].find(t => t.id == taskId);
    if (!task) return;

    const updatedSourceColumn = tasks[sourceColumn].filter(t => t.id != taskId);
    const updatedTargetColumn = [...tasks[targetColumn], task];

    const updatedTasks: TaskColumns = {
      ...tasks,
      [sourceColumn]: updatedSourceColumn,
      [targetColumn]: updatedTargetColumn,
    };

    setTasks(updatedTasks);
  };

  const allowDrop = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="p-6">
      {project && (
        <div className="mb-6">
          <h1 className="text-2xl font-bold">{project.name}</h1>
          <p className="text-gray-600">{project.description}</p>
        </div>
      )}
      <div className="grid grid-cols-3 gap-4">
        {["todo", "inProgress", "done"].map(column => (
          <div>
            <div
              key={column}
              className="bg-gray-100 rounded-md p-4 shadow-md"
              onDragOver={allowDrop}
              onDrop={e => handleDrop(e, column as keyof TaskColumns)}
            >
              <h2 className="text-xl font-semibold capitalize">
                {column.replace(/([A-Z])/g, " $1")}
              </h2>
              {tasks[column as keyof TaskColumns].length != 0 && (
                <div className="space-y-2 mt-4">
                  {tasks[column as keyof TaskColumns]?.map(task => (
                    <div
                      key={task.id}
                      className="bg-white p-2 rounded-md shadow cursor-move"
                      draggable
                      onDragStart={e =>
                        handleDragStart(e, task.id, column as keyof TaskColumns)
                      }
                    >
                      {task.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <CreateTask
              column={column as keyof TaskColumns}
              tasks={tasks}
              setTasks={setTasks}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default View;
