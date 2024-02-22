"use client";

import { useEffect } from "react";
import markdownStyles from "./markdown-styles.module.css";
import Prism from "prismjs";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-go";
import "prismjs/components/prism-c";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-css";
import "prismjs/components/prism-makefile";
import "prismjs/components/prism-lua";
import "prismjs/components/prism-zig";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-twilight.css";

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
