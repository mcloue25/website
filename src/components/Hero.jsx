import React from "react";
import { getImageUrl } from "../utils";

export const Hero = () => {
  return (
    <section className="mx-auto mt-10 flex max-w-6xl items-center justify-between gap-10 px-6 md:mt-16">
      <div className="flex max-w-xl flex-col items-start">
        <h1 className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-6xl">
          Hi, I'm Eoin
        </h1>
        <p className="mt-3 text-lg text-slate-300">
          Machine Learning Engineer & Data Scientist specializing in{" "}
          <span className="text-brand-accent">Time Series</span> and{" "}
          <span className="text-brand-accent">Computer Vision</span>.
        </p>
        <p className="mt-2 text-base text-slate-400">
          4+ years delivering production models and dashboards that turn data into decisions.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <a href="mailto:eoin.mcloughlin1997@gmail.com" className="btn-primary">
            Contact Me
          </a>
          <a
            href="#projects"
            className="inline-flex items-center rounded-full border border-white/10 px-6 py-3 text-base font-medium text-white/90 hover:bg-white/5 transition"
          >
            View Projects
          </a>
        </div>
      </div>

      <img
        src={getImageUrl("hero/linkedinProfilePicCircular.png")}
        alt="Hero image of me"
        className="w-1/2 max-w-md md:max-w-lg md:w-[46%] rounded-2xl shadow-soft"
      />
    </section>
  );
};
