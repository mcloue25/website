import React from "react";
import education from "../data/education.json";

export const Education = () => {
  const degrees = [education?.masters, education?.undergrad].filter(Boolean);

  const DegreeTitle = ({ title, href }) => {
    if (!href) return <span className="text-xl font-semibold text-slate-950">{title}</span>;

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded text-xl font-semibold text-slate-950 hover:text-brand-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-ring"
        aria-label={`${title} opens in a new tab`}
      >
        {title}
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 opacity-80">
          <path
            d="M14 3h7v7M10 14L21 3M21 10v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    );
  };

  return (
    <section id="education" className="mx-auto mt-24 max-w-6xl px-6">
      <div className="max-w-3xl">
        <p className="section-eyebrow">Education</p>
        <h2 className="section-title">Academic background in advanced artificial intelligence and machine learning, built on a strong foundation in computer science and software engineering.</h2>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {degrees.map((degree) => (
          <article key={degree.degree} className="card">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <DegreeTitle title={degree.degree} href={degree.link} />
                <p className="mt-1 text-muted">{degree.institution}</p>
                <p className="mt-1 text-sm text-subtle">
                  {degree.start} – {degree.end}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 md:justify-end">
                {degree.result && <span className="chip">{degree.result}</span>}
                {degree.gpa && <span className="chip">GPA: {degree.gpa}</span>}
              </div>
            </div>

            {degree.notes && <p className="mt-4 text-base leading-7 text-muted">{degree.notes}</p>}

            {degree.modules?.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {degree.modules.map((module) => (
                  <li key={module} className="chip">
                    {module}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};
