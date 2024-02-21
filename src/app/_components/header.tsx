import Link from "next/link";
import NavLinks from "./nav-links";
import ThemeToggler from "./theme-toggler";
import MobileMenu from "./mobile-menu";
import Logo from "./logo";

const Header: React.FC = () => {
  return (
    <header>
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="block">
            <span className="sr-only">Home</span>
          </Link>
          <NavLinks />
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggler />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
