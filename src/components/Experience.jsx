import React from "react";
import history from "../data/history.json";
import { getImageUrl } from "../utils";

export const Experience = () => {
  return (
    <section id="experience" className="mx-auto mt-24 max-w-6xl px-6">
      <div className="max-w-3xl">
        <p className="section-eyebrow">Experience</p>
        <h2 className="section-title">Professional experience developing computer vision systems, analytics platforms and software tools that make complex model outputs useful in practice.</h2>
      </div>

      <ol className="relative mt-8 space-y-6 before:absolute before:left-6 before:top-4 before:hidden before:h-[calc(100%-2rem)] before:w-px before:bg-slate-200 md:before:block">
        {history.map((historyItem) => (
          <li key={`${historyItem.role}-${historyItem.organisation}`} className="card relative flex items-start gap-5 md:ml-14">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white p-2 md:absolute md:-left-20">
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} logo`}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div>
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-950">{historyItem.role}</h3>
                  <p className="text-base text-muted">{historyItem.organisation}</p>
                </div>
                <p className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-sm text-slate-700">
                  {historyItem.startDate} – {historyItem.endDate}
                </p>
              </div>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-muted">
                {historyItem.experiences.map((experience) => (
                  <li key={experience}>{experience}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};
