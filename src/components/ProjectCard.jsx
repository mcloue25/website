import React from "react";
import { getImageUrl } from "../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source, impact },
}) => {
  return (
    <div className="card max-w-sm">
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className="mb-4 rounded-xl"
      />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-base text-slate-300">{description}</p>
      {impact && <p className="mt-2 text-sm text-slate-400">Outcome: {impact}</p>}

      <ul className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill, id) => (
          <li key={id} className="chip">
            {skill}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex gap-3">
        {/* {demo && <a href={demo} className="btn-primary">Demo</a>} */}
        {source && (
          <a
            href={source}
            className="inline-flex items-center rounded-full border border-white/10 px-5 py-2 text-sm font-semibold hover:bg-white/5 transition"
          >
            Source
          </a>
        )}
      </div>
    </div>
  );
};
