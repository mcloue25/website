// Projects.jsx
import React from "react";
import projects from "../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section id="projects" className="mx-auto mt-24 max-w-6xl px-6">
      <h2 className="text-3xl font-bold tracking-wide uppercase">Projects</h2>

      {/* Uniform grid; cards control their own fixed height */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};
