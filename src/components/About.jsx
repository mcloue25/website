import React from "react";
import { getImageUrl } from "../utils";

export const About = () => {
  const items = [
    {
      icon: "about/cursorIcon.png",
      title: "Data Scientist",
      text:
        "I'm a Data Scientist who designs Time Series Analysis models to translate complex data into actionable results",
    },
    {
      icon: "about/serverIcon.png",
      title: "Machine Learning Engineer",
      text:
        "I have built numerous Time Series & Computer Vision models as part of my work & various projects",
    },
    {
      icon: "about/uiIcon.png",
      title: "Frontend Developer",
      text:
        "I have designed & developed multiple dashboards for displaying the results of these models when applied to data in the wild",
    },
  ];

  return (
    <section id="about" className="relative mx-auto mt-24 max-w-6xl rounded-2xl px-6 py-16">
      <h2 className="text-3xl font-bold tracking-wide uppercase">About</h2>

      <div className="mt-8 flex flex-col items-center gap-8 md:flex-row md:items-start">
        <img
          src={getImageUrl("about/working.jpg")}
          alt="Me working on phase synchrony for MoveAhead"
          className="hidden w-full max-w-md rounded-xl md:block md:w-1/3 md:max-w-none shadow-soft"
        />

        <ul className="flex w-full flex-col gap-6 text-slate-200">
          {items.map((item) => (
            <li key={item.title} className="card flex items-start gap-4">
              <img src={getImageUrl(item.icon)} alt="icon" className="h-8 w-8" />
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-1 text-base text-slate-300">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
