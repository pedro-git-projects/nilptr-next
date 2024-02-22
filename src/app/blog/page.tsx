"use client";

import { getAllPosts } from "@/lib/api";
import PostCard from "../_components/post-card";
import { Post } from "@/interfaces/post";
import { useEffect, useState } from "react";
import Pagination from "../_components/pagination";

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;
  const [posts, setPosts] = useState<Array<Post> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const fetchedPosts = await getAllPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        // @ts-ignore
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage]);

  const totalPages = posts ? Math.ceil(posts.length / postsPerPage) : 0;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts
    ? posts.slice(indexOfFirstPost, indexOfLastPost)
    : [];

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main>
      {loading ? (
        <p>Loading posts...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          {currentPosts.map(post => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
      <div className="m-4">
        {posts && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </main>
  );
}
