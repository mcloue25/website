import React from "react";
import projects from "../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section id="projects" className="mx-auto mt-24 max-w-6xl px-6">
      <h2 className="text-3xl font-bold tracking-wide uppercase">Projects</h2>
      <div className="mt-8 flex w-full flex-wrap items-start justify-center gap-6">
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};
