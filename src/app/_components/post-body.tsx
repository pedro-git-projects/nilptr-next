"use client";

import { useEffect } from "react";
import markdownStyles from "./markdown-styles.module.css";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-go";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  useEffect(() => {
    Prism.highlightAll();
  }, [content]);
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
        suppressHydrationWarning
      />
    </div>
  );
}
