"use client";
import { useState } from "react";
import Link from "next/link";

const MobileMenu: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleMobileMenu = () => {
    setShowMobileMenu(prev => !prev);
  };

  return (
    <>
      <button
        onClick={toggleMobileMenu}
        className="block rounded p-2.5 transition  md:hidden"
      >
        <span className="sr-only">Toggle menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {showMobileMenu && (
        <div className="show-mobile-menu dark:bg-header bg-light-header">
          <ul className="space-y-1">
            <li>
              <Link href="/projetos" className="mobile-menu-link">
                projetos
              </Link>
            </li>
            <li>
              <Link href="/blog" className="mobile-menu-link">
                blog
              </Link>
            </li>
            <li>
              <Link href="/cv" className="mobile-menu-link">
                cv
              </Link>
            </li>
            <li>
              <Link href="/servicos" className="mobile-menu-link">
                serviços
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
