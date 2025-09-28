"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/" },
  { name: "about", path: "/aboutme" },
  { name: "services", path: "/services" },
  { name: "projects", path: "/projects" },
  { name: "contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6">
      {links.map((link, index) => {
        const isActive = link.path === pathname;

        return (
          <Link
            key={index}
            href={link.path}
            className={`capitalize px-1 font-medium px-1 transition-all duration-300
              ${
                isActive
                  ? "text-accentNeon border-b-2 border-accentNeon font-bold"
                  : "text-white "
              } hover:text-accentNeonHover hover:border-b-2 hover:border-accentNeonHover`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
