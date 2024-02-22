import Link from "next/link";

const NavLinks: React.FC = () => {
  return (
    <nav aria-label="Global" className="hidden md:block">
      <ul className="flex items-center gap-6 text-sm">
        <li>
          <Link href="/projetos">projetos</Link>
        </li>
        <li>
          <Link href="/blog">blog</Link>
        </li>
        <li>
          <Link href="/cv">cv</Link>
        </li>
        <li>
          <Link href="/servicos">serviços</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
