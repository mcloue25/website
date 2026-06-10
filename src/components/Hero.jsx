import React from "react";
import { getImageUrl } from "../utils";

const strengths = [
  "Research-led ML development",
  "Model evaluation and benchmarking",
  "Computer vision and pose estimation",
  "Time series classification",
  "Production-focused AI systems",
];

export const Hero = () => {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-14 md:grid-cols-[1.15fr_0.85fr] md:pt-20">
      <div className="flex max-w-3xl flex-col items-start">
        <p className="rounded-full border border-brand-primary/20 bg-sky-50 px-4 py-1.5 text-sm font-semibold text-brand-primary">
          Machine Learning Engineer · Research-Led ML · Applied AI Systems
        </p>

        <h1 className="mt-6 max-w-4xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-6xl">
          Building production AI systems from research to deployment.
        </h1>

        <p className="mt-5 text-lg leading-8 text-muted">
          I specialise in computer vision, time series modelling, pose estimation and applied ML systems, with 5+ years of experience developing models, analytics tools and production-facing AI applications.
        </p>

        <p className="mt-3 text-base leading-7 text-subtle">
          First Class MSc Advanced Artificial Intelligence at UCD · First Class BSc Computer Science · Research in explainable time series classification.
        </p>

        <p className="mt-3 text-base leading-7 text-subtle">
          I’m looking for Machine Learning Engineer roles where I can combine research-led model development with practical engineering and deployment.
        </p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Core strengths">
          {strengths.map((strength) => (
            <li key={strength} className="chip">
              {strength}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#projects" className="btn-primary">
            View Featured Work
          </a>

          <a href="/Eoin_McLoughlin_CV.pdf" download className="btn-secondary">
            Download CV
          </a>

          <a href="mailto:eoin.mcloughlin1997@gmail.com" className="btn-secondary">
            Contact
          </a>
        </div>
      </div>

      <div className="relative mx-auto aspect-square w-full max-w-sm md:max-w-md">
        <div
          className="absolute inset-0 rounded-full bg-brand-primary/15 blur-3xl"
          aria-hidden="true"
        />

        <img
          src={getImageUrl("hero/linkedinProfilePicCircular.png")}
          alt="Eoin McLoughlin"
          className="relative h-full w-full rounded-full border border-slate-200/90 bg-white p-2 object-cover shadow-soft"
        />
      </div>
    </section>
  );
};
