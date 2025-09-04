import React, { useState } from "react";
import { getImageUrl } from "../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-brand-bg/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a className="text-lg font-semibold tracking-tight hover:opacity-90" href="/">
          E. McLoughlin
        </a>

        <div className="flex items-center">
          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <img
              className="h-5 w-5"
              src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
              alt="menu"
            />
          </button>

          {/* Desktop */}
          <ul className="ml-8 hidden list-none gap-8 md:flex">
            {links.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative text-sm text-slate-200 transition hover:text-white"
                >
                  <span className="after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-brand-accent after:transition-all hover:after:w-full">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile sheet */}
          {menuOpen && (
            <ul
              className="absolute right-6 top-16 flex w-60 flex-col gap-2 rounded-2xl border border-white/10 bg-brand-surface/90 p-4 shadow-soft backdrop-blur md:hidden"
              onClick={() => setMenuOpen(false)}
            >
              {links.map((item) => (
                <li key={item.href}>
                  <a className="block rounded-lg px-4 py-2 text-base hover:bg-white/5" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};
