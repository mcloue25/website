// ProjectCard.jsx
import React from "react";
import { getImageUrl } from "../utils";

export const ProjectCard = ({
  project: { title, imageSrc, imageFit, description, skills, demo, source, impact },
}) => {
  const [fit, setFit] = React.useState(imageFit || "cover");

  const handleLoad = (e) => {
    // Only auto-detect if you haven't forced a mode via project.imageFit
    if (imageFit) return;
    const img = e.currentTarget;
    const isPortrait = img.naturalHeight > img.naturalWidth;
    setFit(isPortrait ? "contain" : "cover");
  };

  return (
    <article className="card flex h-[480px] flex-col rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm transition hover:bg-white/10">
      {/* fixed landscape-shaped box; portrait images will letterbox left/right */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-800/30">
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          onLoad={handleLoad}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 h-full w-full object-center ${
            fit === "contain" ? "object-contain" : "object-cover"
          }`}
        />
      </div>

      <div className="mt-4 flex-1">
        <h3 className="text-xl font-semibold text-center line-clamp-2">{title}</h3>
        <p className="mt-2 text-sm text-slate-300 line-clamp-3">{description}</p>
        {impact && <p className="mt-2 text-xs text-slate-400 line-clamp-2">Outcome: {impact}</p>}

        <ul className="mt-3 flex max-h-16 flex-wrap gap-2 overflow-hidden">
          {skills.map((skill, id) => (
            <li key={id} className="chip">{skill}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex gap-3 pt-4">
        {source && (
          <a
            href={source}
            className="inline-flex items-center rounded-full border border-white/10 px-5 py-2 text-sm font-semibold transition hover:bg-white/5"
          >
            Github Repo
          </a>
        )}
      </div>
    </article>
  );
};
