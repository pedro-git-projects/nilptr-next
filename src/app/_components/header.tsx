import Link from "next/link";
import NavLinks from "./nav-links";
import ThemeToggler from "./theme-toggler";
import MobileMenu from "./mobile-menu";
import Logo from "./logo";
import Search from "./search";

const Header: React.FC = () => {
  return (
    <header>
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="block">
            <span className="sr-only">Home</span>
            <Logo />
          </Link>
          <NavLinks />
        </div>
        <div className="flex items-center gap-4">
          <Search />
          <ThemeToggler />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
