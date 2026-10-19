import Link from "next/link";
import Logo from "./Logo";
import NavLink from "./NavLink";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-blue-100 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-3 sm:flex-row sm:justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-blue-700">
          <Logo size={44} priority />
          Aoiro Studio
        </Link>
        <ul className="flex gap-1 rounded-full bg-slate-100 p-1">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
