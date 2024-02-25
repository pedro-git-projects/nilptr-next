"use client";

import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchModal from "./search-modal";
import SearchBtn from "./search-btn";

const SearchInput: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <SearchBtn handleClick={handleSearchClick} />
      {isModalOpen && <SearchModal onClose={handleModalClose} />}
    </div>
  );
};

export default SearchInput;
