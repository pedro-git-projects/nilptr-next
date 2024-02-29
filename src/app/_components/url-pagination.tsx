"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface Props {
  totalPages: number;
}

const URLPagination: React.FC<Props> = ({ totalPages }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  useEffect(() => {
    if (currentPage < 1) {
      handlePageClick(1);
    } else if (currentPage > totalPages) {
      handlePageClick(totalPages);
    }
  }, [currentPage, totalPages]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageClick(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageClick(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    window.location.href = `${pathname}?${params.toString()}`;
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <li key={i}>
          <a
            href="#"
            onClick={() => handlePageClick(i)}
            className={`block size-8 border ${
              currentPage === i
                ? "bg-light-background text-light-text border-[#fabd2f] dark:border-text-light dark:bg-background dark:text-text-light "
                : "bg-light-background text-light-text border-gray-100 border-light-background dark:border-[#282828] dark:bg-background dark:text-text-light"
            } text-center leading-8`}
          >
            {i}
          </a>
        </li>,
      );
    }
    return buttons;
  };

  return (
    <ol className="flex justify-center gap-1 text-xs font-medium">
      <li>
        <a
          href="#"
          onClick={handlePrevPage}
          className="inline-flex size-8 items-center justify-center border border-light-background bg-light-background  text-gray-900 rtl:rotate-180 dark:border-background dark:bg-background dark:text-white"
        >
          <span className="sr-only">Prev Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>

      {renderPaginationButtons()}

      <li>
        <a
          href="#"
          onClick={handleNextPage}
          className="inline-flex size-8 items-center justify-center border border-light-background bg-light-background  text-gray-900 rtl:rotate-180 dark:border-background dark:bg-background dark:text-white"
        >
          <span className="sr-only">Next Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>
    </ol>
  );
};

export default URLPagination;
