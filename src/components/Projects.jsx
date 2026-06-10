import React from "react";
import projects from "../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section id="projects" className="mx-auto mt-24 max-w-6xl px-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="section-eyebrow">Recent Work</p>
          <h2 className="section-title">Recent work across model development, evaluation and deployment.</h2>
          <p className="mt-4 text-lg leading-8 text-muted">
            A selection of recent projects showing how I approach ML problems, evaluate model performance and build practical tools and systems around the outputs.
          </p>
        </div>

        <a
          href="https://github.com/mcloue25"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary self-start md:self-auto"
        >
          More on GitHub
        </a>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};
