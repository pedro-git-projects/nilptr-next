import { IconType } from "react-icons";
import React from "react";

interface Props {
  title: string;
  content: string;
  icon: IconType;
}

const InfoCard: React.FC<Props> = ({ title, content, icon }) => {
  return (
    <div
      className="block rounded-xl border 
    border-light-background dark:border-background 
    p-4 shadow-sm 
    dark:hover:border-accent hover:border-light-text
    hover:ring-1 
    dark:hover:ring-accent hover:ring-light-text 
    focus:outline-none focus:ring"
    >
      <span className="inline-block rounded-lg bg-light-background dark:bg-background  p-3">
        {React.createElement(icon, {
          className: "text-light-text dark:text-text h-6 w-6",
        })}
      </span>

      <h2 className="mt-2 font-bold">{title}</h2>

      <p className="hidden sm:mt-1 sm:block sm:text-sm">{content}</p>
    </div>
  );
};

export default InfoCard;
