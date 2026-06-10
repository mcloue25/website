import React, { useEffect, useRef } from "react";
import { getImageUrl } from "../utils";

export const About = () => {
  const items = [
    {
      icon: "about/uiIcon.png",
      title: "Research & Evaluation",
      text: "Benchmarking models, validating reproducibility, improving interpretability and comparing approaches against strong classical and state-of-the-art baselines.",
    },
    {
      icon: "about/serverIcon.png",
      title: "Model Development",
      text: "Designing and refining machine learning models across different data modalities, from feature design and experimentation through to evaluation, optimisation and practical application.",
    },
    {
      icon: "about/cursorIcon.png",
      title: "ML Engineering & Deployment",
      text: "Developing production-focused pipelines, data processing workflows, backend integrations and analytics tooling that turn models into reliable, usable AI systems.",
    },
  ];

  const listRef = useRef(null);
  const imgWrapRef = useRef(null);

  useEffect(() => {
    if (!listRef.current || !imgWrapRef.current) return;

    const mql = window.matchMedia("(min-width: 768px)");

    const update = () => {
      if (!listRef.current || !imgWrapRef.current) return;
      imgWrapRef.current.style.height = mql.matches
        ? `${listRef.current.getBoundingClientRect().height}px`
        : "auto";
    };

    const ro = new ResizeObserver(update);
    ro.observe(listRef.current);
    window.addEventListener("resize", update);
    update();

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section id="profile" className="relative mx-auto mt-24 max-w-6xl px-6">
      <div className="max-w-3xl">
        <p className="section-eyebrow">Profile</p>
        <h2 className="section-title">ML engineer with research depth and production delivery experience.</h2>
        <p className="mt-4 text-lg leading-8 text-muted">
          My work sits at the intersection of machine learning research, engineering implementation and user-facing analytics. I am particularly interested in roles where I can translate advanced concepts from research — including computer vision, time series modelling, model evaluation and explainable AI — into robust, production-ready systems. I enjoy taking models beyond experimentation by building the pipelines, evaluation frameworks and interfaces needed to make them reliable, interpretable and useful in real-world applications.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-start">
        <div ref={imgWrapRef} className="hidden overflow-hidden rounded-2xl border border-slate-200/90 shadow-soft md:block md:w-1/3">
          <img
            src={getImageUrl("about/working.jpg")}
            alt="Eoin working on model analysis"
            className="h-full w-full object-cover"
          />
        </div>

        <ul ref={listRef} className="flex w-full flex-col gap-5 md:w-2/3">
          {items.map((item) => (
            <li key={item.title} className="card flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-50 ring-1 ring-slate-200">
                <img src={getImageUrl(item.icon)} alt="" aria-hidden="true" className="h-7 w-7" />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-1 text-base leading-7 text-muted">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
