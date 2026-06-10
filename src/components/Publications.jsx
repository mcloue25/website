import React from "react";
import publications from "../data/publications.json";

export const Publications = () => {
  return (
    <section id="publications" className="mx-auto mt-24 max-w-6xl px-6">
      <div className="max-w-3xl">
        <p className="section-eyebrow">Research</p>
        <h2 className="section-title">Academic work in explainable time series classification.</h2>
        <p className="mt-4 text-lg leading-8 text-muted">
          Research focused on reproducibility, efficient execution and interpretability for state-of-the-art time series classification methods.
        </p>
      </div>

      <div className="mt-8 space-y-6">
        {publications.map((publication) => (
          <article key={publication.title} className="card">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-semibold text-slate-950">{publication.title}</h3>
                  {publication.status && (
                    <span className="rounded-full bg-brand-primary/10 px-3 py-1 text-sm font-semibold text-brand-primary">
                      {publication.status}
                    </span>
                  )}
                </div>

                {publication.authors && <p className="mt-2 text-sm text-muted">{publication.authors}</p>}
                {publication.venue && <p className="mt-1 text-sm italic text-subtle">{publication.venue}</p>}
              </div>

              {publication.year && (
                <span className="self-start rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                  {publication.year}
                </span>
              )}
            </div>

            {publication.badges?.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Key results for ${publication.title}`}>
                {publication.badges.map((badge) => (
                  <li key={badge} className="rounded-full border border-brand-primary/20 bg-sky-50 px-3 py-1 text-sm font-semibold text-brand-primary">
                    {badge}
                  </li>
                ))}
              </ul>
            )}

            {publication.description && (
              <p className="mt-5 text-base leading-7 text-muted">{publication.description}</p>
            )}

            {publication.highlights?.length > 0 && (
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-brand-primary">Research contributions</h4>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-7 text-muted">
                  {publication.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}

            {publication.skills?.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {publication.skills.map((skill) => (
                  <li key={skill} className="chip">
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
                  className="btn-secondary px-5 py-2 text-sm"
                >
                  View manuscript
                </a>
              )}

              {publication.code && (
                <a
                  href={publication.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-5 py-2 text-sm"
                >
                  View code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
