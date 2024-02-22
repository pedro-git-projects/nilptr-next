"use client";

import { getAllProjects } from "@/lib/api";
import ProjectCard from "../_components/project-card";
import { useEffect, useState } from "react";
import { Project } from "@/interfaces/project";
import PlaceholderPostCard from "../_components/placeholder-post-card";
import Pagination from "../_components/pagination";

export default function Projects() {
  const [projects, setProjects] = useState<Array<Project>>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const projectsPerPage = 4; // Adjust this value as needed
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const allProjects = await getAllProjects();
        const paginatedProjects = allProjects.slice(
          (currentPage - 1) * projectsPerPage,
          currentPage * projectsPerPage,
        );
        setTotalPages(Math.ceil(allProjects.length / projectsPerPage));
        setProjects(paginatedProjects);
      } catch (error) {
        // @ts-ignore
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [currentPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main>
      {loading ? (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          {Array.from({ length: projectsPerPage }).map((_, index) => (
            <PlaceholderPostCard key={index} />
          ))}
        </div>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          {projects.map(project => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
      {totalPages > 1 && (
        <div className="m-4">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </main>
  );
}
