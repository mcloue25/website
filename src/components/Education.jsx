import React from "react";
import education from "../data/education.json";

export const Education = () => {
  const ug = education?.undergrad;
  const ms = education?.masters;

  const DegreeTitle = ({ title, href }) => {
    if (href) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xl font-semibold text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-ring rounded"
          aria-label={`${title} (opens in a new tab)`}
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
    }
    return <span className="text-xl font-semibold">{title}</span>;
  };

  return (
    <section id="education" className="mx-auto mt-24 max-w-6xl px-6">
      <h2 className="text-3xl font-bold tracking-wide uppercase">Education</h2>

      <div className="mt-8 space-y-6">
        {/* Undergraduate */}
        <div className="card">
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
              <DegreeTitle title={ug?.degree || "B.Sc. in …"} href={ug?.link} />
              <p className="text-slate-300">{ug?.institution || "Your University"}</p>
              <p className="mt-1 text-sm text-slate-400">
                {ug?.start || "YYYY"} – {ug?.end || "YYYY"}
              </p>
            </div>

            <div className="flex flex-col items-end gap-2">
              {ug?.result && (
                <span className="rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-sm font-medium text-slate-100">
                  {ug.result}
                </span>
              )}
              {ug?.gpa && (
                <span className="rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-sm font-medium text-slate-100">
                  GPA: {ug.gpa}
                </span>
              )}
            </div>
          </div>

          {ug?.notes && (
            <p className="mt-3 text-base text-slate-300">{ug.notes}</p>
          )}
        </div>


        {/* Masters (in progress) */}
        <div className="card">
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
              <DegreeTitle title={ms?.degree || "M.Sc. in …"} href={ms?.link} />
              <p className="text-slate-300">{ms?.institution || "Your University"}</p>
              <p className="mt-1 text-sm text-slate-400">
                {ms?.start || "YYYY"} – {ms?.end || "Present"}
              </p>
            </div>
            <span className="self-start rounded-full bg-brand-primary/20 px-3 py-1 text-sm font-semibold text-brand-accent">
              In Progress
            </span>
          </div>

          {ms?.notes && (
            <p className="mt-3 text-base text-slate-300">{ms.notes}</p>
          )}
        </div>
      </div>
    </section>
  );
};
