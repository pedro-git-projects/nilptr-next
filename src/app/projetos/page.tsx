"use client";

import { getPaginatedProjects } from "@/lib/api";
import { useEffect, useState } from "react";
import { Project } from "@/interfaces/project";
import ProjectCard from "../_components/project-card";
import PlaceholderPostCard from "../_components/placeholder-post-card";
import { PROJECTS_PER_PAGE } from "@/lib/constants";
import URLPagination from "../_components/url-pagination";

interface SearchParams {
  page?: string;
}

interface Props {
  searchParams?: SearchParams;
}

const Projects: React.FC<Props> = ({ searchParams }) => {
  const [projects, setProjects] = useState<Array<Project>>([]);
  const currentPage = Number(searchParams?.page) || 1;
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://nilptr.dev/apagination", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ currentPage }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const { projects, totalPages } = await response.json();
        setProjects(projects);
        setTotalPages(totalPages);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [currentPage]);

  return (
    <main>
      <h1 className="text-3xl font-bold sm:text-4xl m-6">Projetos</h1>
      {loading ? (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          {Array.from({ length: PROJECTS_PER_PAGE }).map((_, index) => (
            <PlaceholderPostCard key={index} />
          ))}
        </div>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          {projects.map(project => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
      {totalPages > 1 && (
        <div className="m-6">
          <URLPagination totalPages={totalPages} />
        </div>
      )}
    </main>
  );
};

export default Projects;
