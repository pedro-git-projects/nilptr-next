import { getAllPosts } from "@/lib/api";
import { POSTS_PER_PAGE } from "@/lib/constants";

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
    const posts = await getAllPosts();
    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
    const paginatedPosts = posts.slice(
      (currentPage - 1) * POSTS_PER_PAGE,
      currentPage * POSTS_PER_PAGE,
    );
    return Response.json({ posts: paginatedPosts, totalPages });
  } catch (err: any) {
    return Response.json({ error: err.message });
  }
};
