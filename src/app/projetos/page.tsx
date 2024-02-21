import { getAllProjects } from "@/lib/api";
import ProjectCard from "../_components/project-card";

export default function Blog() {
  const projects = getAllProjects();
  console.log(projects);
  return (
    <main>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        {projects.map(project => (
          <ProjectCard project={project} />
        ))}
      </div>
    </main>
  );
}
