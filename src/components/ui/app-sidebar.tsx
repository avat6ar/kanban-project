import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { CreateProject } from "../CreateProject";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "@/hooks/localStorage";

export function AppSidebar() {
  const [projects, setProjects] = useState([]);
  const { getItem } = useLocalStorage();

  useEffect(() => {
    setProjects(getItem("projects"));
  }, []);

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl text-black">
            Projects
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <CreateProject setProjects={setProjects} />
            <SidebarMenu className="mt-4">
              {projects?.map((project: any) => (
                <SidebarMenuItem key={project.id}>
                  <SidebarMenuButton asChild>
                    <Link to={`/projects/${project.id}`} className="text-black text-lg capitalize">
                      <span>{project.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
