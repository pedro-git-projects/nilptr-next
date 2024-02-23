"use client";
import { useState } from "react";
import Link from "next/link";
import { FiX, FiMenu } from "react-icons/fi";

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
        {showMobileMenu ? <FiX /> : <FiMenu />}
      </button>

      {showMobileMenu && (
        <div className="show-mobile-menu dark:bg-header bg-light-header">
          <ul className="space-y-1">
            <li>
              <Link
                onClick={toggleMobileMenu}
                href="/projetos"
                className="mobile-menu-link"
              >
                projetos
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMobileMenu}
                href="/blog"
                className="mobile-menu-link"
              >
                blog
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMobileMenu}
                href="/cv"
                className="mobile-menu-link"
              >
                cv
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMobileMenu}
                href="/sobre"
                className="mobile-menu-link"
              >
                sobre
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMobileMenu}
                href="/sobre"
                className="mobile-menu-link"
              >
                contato
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
