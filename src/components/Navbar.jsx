import React, { useState } from "react";
import { getImageUrl } from "../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#profile", label: "Profile" },
    { href: "#publications", label: "Research" },
    { href: "#projects", label: "Work" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-brand-bg/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a className="text-lg font-semibold tracking-tight text-slate-950 transition hover:text-brand-primary" href="/">
          Eoin McLoughlin
        </a>

        <div className="flex items-center gap-4">
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white transition hover:bg-slate-100 md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span
              className="h-5 w-5 bg-slate-700"
              style={{
                WebkitMaskImage: `url(${menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")})`,
                maskImage: `url(${menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")})`,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                WebkitMaskSize: "contain",
                maskSize: "contain",
              }}
              aria-hidden="true"
            />
          </button>

          <ul className="ml-8 hidden list-none gap-7 md:flex">
            {links.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="relative text-sm font-medium text-slate-700 transition hover:text-brand-primary">
                  <span className="after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-brand-primary after:transition-all hover:after:w-full">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/Eoin McLoughlin - CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 md:inline-flex"
          >
            View CV
          </a>

          {menuOpen && (
            <ul
              className="absolute right-6 top-16 flex w-60 flex-col gap-2 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-soft backdrop-blur md:hidden"
              onClick={() => setMenuOpen(false)}
            >
              {links.map((item) => (
                <li key={item.href}>
                  <a className="block rounded-lg px-4 py-2 text-base text-slate-700 hover:bg-slate-100" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  className="block rounded-lg px-4 py-2 text-base font-semibold text-brand-primary hover:bg-sky-50"
                  href="/Eoin_McLoughlin_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View CV
                </a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};
