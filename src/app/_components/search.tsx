"use client";

import { Post } from "@/interfaces/post";
import { getAllPosts } from "@/lib/api";
import FlexSearch, { Index } from "flexsearch";
import { useEffect, useState } from "react";
import Link from "next/link";

const Search: React.FC = () => {
  const [index, setIndex] = useState(new FlexSearch.Index({}));
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [posts, setPosts] = useState<Array<Post> | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getAllPosts();
        setPosts(fetchedPosts);
        const newIndex = new FlexSearch.Index();
        console.log(fetchedPosts);
        fetchedPosts.forEach(item => {
          newIndex.append(item.slug, item.title + " " + item.content);
        });
        console.log(newIndex);
        setIndex(newIndex);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    // @ts-ignore
    setResults(index.search(query));
  }, [query, index]);

  const finalResult = results.map(result => {
    const post = posts?.find(item => item.slug === result);
    return post ? (
      <li key={post.slug}>
        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
      </li>
    ) : null;
  });

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <ul>{finalResult}</ul>
    </div>
  );
};

export default Search;
