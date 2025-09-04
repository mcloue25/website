import React from "react";
import { getImageUrl } from "../utils";

export const Contact = () => {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="mt-28 w-full border-t border-white/10 bg-brand-surface/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 py-14 md:flex-row">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold tracking-tight">Contact</h2>
          <p className="mt-2 text-lg text-slate-300">
            Feel free to reach out if you want to talk data!
          </p>
        </div>
        <ul className="flex list-none flex-col items-start gap-3 md:items-end">
          <li className="flex items-center gap-3">
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" className="h-5 w-5" />
            <a href="mailto:myemail@email.com" className="text-base hover:underline">
              My email
            </a>
          </li>
          <li className="flex items-center gap-3">
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" className="h-5 w-5" />
            <a
              href="https://www.linkedin.com/in/eoin-mcloughlin-3398a11a6/"
              className="text-base hover:underline"
            >
              Linkedin Profile
            </a>
          </li>
          <li className="flex items-center gap-3">
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" className="h-5 w-5" />
            <a href="https://github.com/mcloue25" className="text-base hover:underline">
              Github Profile
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-400">
        © {year} Eoin McLoughlin · Built with React & Tailwind
      </div>
    </footer>
  );
};
