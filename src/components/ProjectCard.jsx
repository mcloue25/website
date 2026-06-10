import React from "react";
import { getImageUrl } from "../utils";

export const ProjectCard = ({
  project: { title, imageSrc, imageFit, description, skills, source, impact, category, badges },
}) => {
  const [fit, setFit] = React.useState(imageFit || "cover");

  const handleLoad = (event) => {
    if (imageFit) return;
    const img = event.currentTarget;
    setFit(img.naturalHeight > img.naturalWidth ? "contain" : "cover");
  };

  return (
    <article className="card flex h-full flex-col overflow-hidden p-4 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200">
        <img
          src={getImageUrl(imageSrc)}
          alt={`Screenshot or visual preview for ${title}`}
          onLoad={handleLoad}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 h-full w-full object-center ${fit === "contain" ? "object-contain" : "object-cover"}`}
        />
      </div>

      <div className="flex flex-1 flex-col p-2 pt-5">
        {category && <p className="text-sm font-semibold uppercase tracking-wide text-brand-primary">{category}</p>}
        <h3 className="mt-1 text-2xl font-semibold text-slate-950">{title}</h3>
        <p className="mt-3 text-base leading-7 text-muted">{description}</p>

        {badges?.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Key outcomes for ${title}`}>
            {badges.map((badge) => (
              <li key={badge} className="rounded-full border border-brand-primary/20 bg-sky-50 px-3 py-1 text-sm font-semibold text-brand-primary">
                {badge}
              </li>
            ))}
          </ul>
        )}

        {impact && (
          <p className="mt-4 rounded-2xl border border-brand-primary/20 bg-sky-50 px-4 py-3 text-sm leading-6 text-slate-700">
            <span className="font-semibold text-brand-primary">Impact: </span>
            {impact}
          </p>
        )}

        {skills?.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li key={skill} className="chip">
                {skill}
              </li>
            ))}
          </ul>
        )}

        {source && (
          <div className="mt-auto pt-6">
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-5 py-2 text-sm"
            >
              View repository
            </a>
          </div>
        )}
      </div>
    </article>
  );
};
