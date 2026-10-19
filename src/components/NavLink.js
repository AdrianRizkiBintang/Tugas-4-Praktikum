"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`rounded-full px-4 py-1.5 text-sm transition sm:text-base ${
        isActive
          ? "bg-blue-600 font-semibold text-white shadow"
          : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
      }`}
    >
      {children}
    </Link>
  );
}
