"use client";

import { getPaginatedPosts } from "@/lib/api";
import PostCard from "../_components/post-card";
import { Post } from "@/interfaces/post";
import { useEffect, useState } from "react";
import PlaceholderPostCard from "../_components/placeholder-post-card";
import { POSTS_PER_PAGE } from "@/lib/constants";
import URLPagination from "../_components/url-pagination";

interface SearchParams {
  page?: string;
}

interface Props {
  searchParams?: SearchParams;
}

const Blog: React.FC<Props> = ({ searchParams }) => {
  const currentPage = Number(searchParams?.page) || 1;
  const [posts, setPosts] = useState<Array<Post>>([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const { posts, totalPages } = await getPaginatedPosts(currentPage);
        setTotalPages(totalPages);
        setPosts(posts);
      } catch (error) {
        // @ts-ignore
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage]);

  return (
    <main>
      <h1 className="text-3xl font-bold sm:text-4xl m-6">Publicações</h1>
      {loading ? (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          {Array.from({ length: POSTS_PER_PAGE }).map((_, index) => (
            <PlaceholderPostCard key={index} />
          ))}
        </div>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          {posts.map(post => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
      <div className="m-6">
        {totalPages > 1 && (
          <div className="m-6">
            <URLPagination totalPages={totalPages} />
          </div>
        )}
      </div>
    </main>
  );
};

export default Blog;
