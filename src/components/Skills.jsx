import React from "react";
import skillGroups from "../data/skillGroups.json";

export const Skills = () => {
  return (
    <section id="skills" className="mx-auto mt-24 max-w-6xl px-6">
      <div className="max-w-3xl">
        <p className="section-eyebrow">Technical Skills</p>
        <h2 className="section-title">ML-focused stack across modelling, data, engineering and productisation.</h2>
        <p className="mt-4 text-lg leading-8 text-muted">
          My technical background spans model development, evaluation, data workflows and the user-facing tools needed to make model outputs useful.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article key={group.title} className="card">
            <h3 className="text-xl font-semibold text-slate-950">{group.title}</h3>
            <p className="mt-2 text-base leading-7 text-muted">{group.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill} className="chip">
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
