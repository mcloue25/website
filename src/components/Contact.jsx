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
            Feel free to reach out if you want to talk code
          </p>
        </div>

        {/* Left-aligned, vertical list */}
        <ul className="flex list-none flex-col items-start gap-3 text-left">
          <li>
            <a
              href="mailto:myemail@email.com"
              className="group -m-1.5 flex items-center gap-3 rounded-lg p-1.5 transition hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              aria-label="Email Eoin"
            >
              <img
                src={getImageUrl("contact/emailIcon.png")}
                alt=""
                className="h-5 w-5"
                aria-hidden="true"
              />
              <span className="text-base group-hover:underline">My email</span>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/eoin-mcloughlin-3398a11a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="group -m-1.5 flex items-center gap-3 rounded-lg p-1.5 transition hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              aria-label="Open LinkedIn profile (opens in a new tab)"
            >
              <img
                src={getImageUrl("contact/linkedinIcon.png")}
                alt=""
                className="h-5 w-5"
                aria-hidden="true"
              />
              <span className="text-base group-hover:underline">LinkedIn Profile</span>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/mcloue25"
              target="_blank"
              rel="noopener noreferrer"
              className="group -m-1.5 flex items-center gap-3 rounded-lg p-1.5 transition hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              aria-label="Open GitHub profile (opens in a new tab)"
            >
              <img
                src={getImageUrl("contact/githubIcon.png")}
                alt=""
                className="h-5 w-5"
                aria-hidden="true"
              />
              <span className="text-base group-hover:underline">GitHub Profile</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-400">
        © {year} Eoin McLoughlin · Built with React &amp; Tailwind
      </div>
    </footer>
  );
};
