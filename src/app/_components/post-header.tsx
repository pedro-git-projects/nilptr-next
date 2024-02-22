import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, date, author }: Props) {
  return (
    <>
      <h1 className="text-5xl font-extrabold sm:text-5xl text-center m-2">
        {title}
      </h1>
      <div className="max-w-2xl mx-auto flex flex-col items-center mb-6">
        <div className="block mb-2 text-xl font-bold">{author.name}</div>
      </div>

      <div className="flex items-center justify-center mb-6 text-lg">
        <span className="h-px flex-1 bg-light-text dark:bg-text"></span>
        <span className="shrink-0 px-6">
          {new Date(date).toLocaleDateString("pt-BR", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          })}
        </span>
        <span className="h-px flex-1 bg-light-text dark:bg-text"></span>
      </div>
    </>
  );
}
