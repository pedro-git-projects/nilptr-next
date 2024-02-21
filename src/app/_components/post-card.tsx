import { Post } from "@/interfaces/post";
import React from "react";

interface Props {
  post: Post;
}

const PostCard: React.FC<Props> = ({ post }) => {
  const { title, date, coverImage, excerpt, slug } = post;

  return (
    <article className="flex bg-light-background-light -xl dark:bg-background-light dark:shadow-gray-800/25">
      <div className="rotate-180 p-2" style={{ writingMode: "vertical-lr" }}>
        <time
          dateTime={date}
          className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-light-text dark:text-text"
        >
          <span>
            {new Date(date).toLocaleDateString("pt-BR", { year: "numeric" })}
          </span>
          <span className="w-px flex-1 bg-gray-900/10 dark:bg-white/10"></span>
          <span>
            {new Date(date).toLocaleDateString("pt-BR", {
              month: "short",
              day: "2-digit",
            })}
          </span>
        </time>
      </div>

      <div className="hidden sm:block sm:basis-56">
        <img
          alt=""
          src={coverImage}
          className="aspect-square h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="border-s border-gray-900/10 p-4 sm:!border-l-transparent sm:p-6 dark:border-white/10">
          <a href={`/posts/${slug}`}>
            <h3 className="font-bold uppercase text-light-text dark:text-text">
              {title}
            </h3>
          </a>
          <p className="mt-2 line-clamp-3 text-sm/relaxed text-light-text dark:text-text">
            {excerpt}
          </p>
        </div>

        <div className="sm:flex sm:items-end sm:justify-end">
          <a
            href={`/posts/${slug}`}
            className="block px-5 py-3 text-center text-xs text-light-text dark:text-text font-bold uppercase text-gray-900 transition bg-[#fabd2f] dark:bg-light-button-hover hover:text-[#fbf1c7] dark:hover:text-link-hover"
          >
            Ler Post
          </a>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
