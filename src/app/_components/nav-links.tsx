import Link from "next/link";

const NavLinks: React.FC = () => {
  return (
    <nav aria-label="Global" className="hidden md:block">
      <ul className="flex items-center gap-6 text-sm">
        <li>
          <Link href="/projetos">Projetos</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/cv">CV</Link>
        </li>
        <li>
          <Link href="/servicos">Serviços</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
