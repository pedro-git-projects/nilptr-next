"use client";

import { Post } from "@/interfaces/post";
import { getAllPosts } from "@/lib/api";
import FlexSearch, { Index } from "flexsearch";
import { useEffect, useRef, useState } from "react";
import { FiX } from "react-icons/fi";
import Link from "next/link";

const SearchModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [index, setIndex] = useState(new FlexSearch.Index({}));
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [posts, setPosts] = useState<Post[] | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getAllPosts();
        setPosts(fetchedPosts);
        const newIndex = new FlexSearch.Index();
        fetchedPosts.forEach(item => {
          newIndex.append(item.slug, item.title + " " + item.content);
        });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleModalClose = () => {
    onClose();
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const finalResult = results.map(result => {
    const post = posts?.find(item => item.slug === result);
    if (post) {
      const matchIndex = post.content
        .toLowerCase()
        .indexOf(query.toLowerCase());
      const startIndex = Math.max(matchIndex - 50, 0);
      const endIndex = Math.min(
        matchIndex + query.length + 50,
        post.content.length,
      );
      const matchedSnippet = post.content.substring(startIndex, endIndex);

      return (
        <div className="overflow-y-auto max-h-[80vh]">
          <ul>
            <li className="pt-1.5" key={post.slug}>
              <Link
                className="block rounded-lg px-4 py-2 text-sm font-medium dark:bg-[#504945] dark:hover:bg-[#1d2021] bg-[#fbf1c7] hover:bg-[#ebdbb2]"
                href={`/posts/${post.slug}`}
                onClick={handleModalClose}
              >
                <p>{post.title}</p>
                <p>{matchedSnippet}</p>
              </Link>
            </li>
          </ul>
        </div>
      );
    }
    return null;
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-light-background-light shadow-[#bdae93] dark:bg-background-light border-light-border dark:border-[#3c3836] dark:shadow-gray-800/25 p-4 rounded-lg w-1/2 relative">
        <div className="flex justify-end">
          <button className="mb-2" onClick={handleModalClose}>
            <FiX size={18} />
          </button>
        </div>

        <input
          className="w-full border focus:border-[#fabd2f] dark:focus:border-[#fabd2f] focus:ring-[#fabd2f] placeholder-[#7c6f64] dark:placeholder-[#bdae93] bg-light-background border-light-border dark:border-[#3c3836] text-sm dark:bg-background rounded-md p-2 pl-8"
          value={query}
          onChange={handleInputChange}
          placeholder="Começe a digitar para pesquisar..."
          ref={inputRef}
        />
        <ul className="max-h-[80vh] overflow-y-auto">{finalResult}</ul>
      </div>
    </div>
  );
};

export default SearchModal;
