import { getAllProjects } from "@/lib/api";
import ProjectCard from "../_components/project-card";

export default function Servicos() {
  const projects = getAllProjects();
  return <main></main>;
}
