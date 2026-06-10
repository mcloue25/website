import React from "react";
import { getImageUrl } from "../utils";

export const Contact = () => {
  const year = new Date().getFullYear();

  const links = [
    {
      label: "Email",
      href: "mailto:eoin.mcloughlin1997@gmail.com",
      icon: "contact/emailIcon.png",
      ariaLabel: "Email Eoin",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/eoin-mcloughlin-3398a11a6/",
      icon: "contact/linkedinIcon.png",
      ariaLabel: "Open LinkedIn profile in a new tab",
    },
    {
      label: "GitHub",
      href: "https://github.com/mcloue25",
      icon: "contact/githubIcon.png",
      ariaLabel: "Open GitHub profile in a new tab",
    },
  ];

  return (
    <footer id="contact" className="mt-28 w-full border-t border-slate-200 bg-white/70">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 px-6 py-14 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <p className="section-eyebrow">Contact</p>
          <h2 className="text-4xl font-bold tracking-tight text-slate-950">Let’s talk about ML engineering roles.</h2>
          <p className="mt-3 text-lg leading-8 text-muted">
            I’m open to Machine Learning Engineer roles where I can combine research-led model development with practical engineering, model evaluation and production-focused AI systems.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="/Eoin_McLoughlin_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary px-5 py-2 text-sm">
              View CV
            </a>
            <a href="/Eoin McLoughlin - CV.pdf" download className="btn-secondary px-5 py-2 text-sm">
              Download CV
            </a>
          </div>
        </div>

        <ul className="flex list-none flex-col items-start gap-3 text-left">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group -m-1.5 flex items-center gap-3 rounded-lg p-1.5 transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-ring"
                aria-label={link.ariaLabel}
              >
                <span
                  className="h-5 w-5 bg-slate-700 transition group-hover:bg-brand-primary"
                  style={{
                    WebkitMaskImage: `url(${getImageUrl(link.icon)})`,
                    maskImage: `url(${getImageUrl(link.icon)})`,
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                  }}
                  aria-hidden="true"
                />
                <span className="text-base text-slate-700 group-hover:underline">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-slate-200 py-6 text-center text-xs text-soft">
        © {year} Eoin McLoughlin · Built with React &amp; Tailwind
      </div>
    </footer>
  );
};
