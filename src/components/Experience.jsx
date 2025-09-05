import React from "react";
import skills from "../data/skills.json";
import history from "../data/history.json";
import { getImageUrl } from "../utils";

export const Experience = () => {
  return (
    <section id="experience" className="mx-auto mt-24 max-w-6xl px-6">
      <h2 className="text-3xl font-bold tracking-wide uppercase">Experience</h2>

      <div className="mt-6 flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
        {/* Skills */}
        <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-3 md:w-2/5">
          {skills.map((skill, id) => (
            <div key={id} className="flex flex-col items-center gap-2">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-brand-accent/20">
                <img
                  src={getImageUrl(skill.imageSrc)}
                  alt={skill.title}
                  className="h-16 w-16 object-contain"
                />
              </div>
              <p className="text-base font-medium">{skill.title}</p>
            </div>
          ))}
        </div>

        {/* History */}
        <ul className="flex w-full flex-col gap-6 md:w-3/5">
          {history.map((historyItem, id) => (
            <li key={id} className="card flex items-start gap-4">
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo`}
                className="h-12 w-12 object-contain opacity-90"
              />
              <div>
                <h3 className="text-xl font-semibold">
                  {`${historyItem.role}, ${historyItem.organisation}`}
                </h3>
                <p className="text-sm text-slate-400">
                  {`${historyItem.startDate} - ${historyItem.endDate}`}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-base">
                  {historyItem.experiences.map((experience, idx) => (
                    <li key={idx}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
