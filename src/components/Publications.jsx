import React from "react";
import publications from "../data/publications.json";

export const Publications = () => {
  return (
    <section id="publications" className="mx-auto mt-24 max-w-6xl px-6">
      <h2 className="text-3xl font-bold tracking-wide uppercase">Publications</h2>

      <div className="mt-8 space-y-6">
        {publications.map((publication, id) => (
          <article key={id} className="card">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold text-white">
                    {publication.title}
                  </h3>

                  {publication.status && (
                    <span className="rounded-full bg-brand-primary/20 px-3 py-1 text-sm font-semibold text-brand-accent">
                      {publication.status}
                    </span>
                  )}
                </div>

                {publication.authors && (
                  <p className="mt-2 text-sm text-slate-300">
                    {publication.authors}
                  </p>
                )}

                {publication.venue && (
                  <p className="mt-1 text-sm italic text-slate-400">
                    {publication.venue}
                  </p>
                )}
              </div>

              {publication.year && (
                <span className="self-start rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-slate-100">
                  {publication.year}
                </span>
              )}
            </div>

            {publication.description && (
              <p className="mt-4 text-base leading-7 text-slate-300">
                {publication.description}
              </p>
            )}

            {publication.highlights?.length > 0 && (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-slate-300">
                {publication.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            )}

            {publication.skills?.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {publication.skills.map((skill, idx) => (
                  <li key={idx} className="chip">
                    {skill}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-5 flex flex-wrap gap-3">
              {publication.paper && (
                <a
                  href={publication.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-white/10 px-5 py-2 text-sm font-semibold transition hover:bg-white/5"
                >
                  Paper
                </a>
              )}

              {publication.code && (
                <a
                  href={publication.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-white/10 px-5 py-2 text-sm font-semibold transition hover:bg-white/5"
                >
                  Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
