import { getAllProjects } from "@/lib/api";
import { PROJECTS_PER_PAGE } from "@/lib/constants";

export const POST = async (req: Request) => {
  if (req.method !== "POST") {
    return Response.json({
      error: "Method Not Allowed",
      allowedMethods: ["POST"],
    });
  }

  try {
    const data = await req.json();
    const { currentPage }: PaginationProps = data;
    if (!currentPage) {
      return Response.json({ error: "currentPage is undefined" });
    }
    const projects = await getAllProjects();
    const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
    const paginatedPosts = projects.slice(
      (currentPage - 1) * PROJECTS_PER_PAGE,
      currentPage * PROJECTS_PER_PAGE,
    );
    return Response.json({ posts: paginatedPosts, totalPages });
  } catch (err: any) {
    return Response.json({ error: err.message });
  }
};
