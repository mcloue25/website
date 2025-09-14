import React, { useEffect, useRef } from "react";
import { getImageUrl } from "../utils";

export const About = () => {
  const items = [
    {
      icon: "about/serverIcon.png",
      title: "Machine Learning Engineer",
      text:
        "I train advanced Time Series and Computer Vision models to solve complex real-world problems.",
    },
    {
      icon: "about/cursorIcon.png",
      title: "Software Developer",
      text:
        "I build reliable software systems that host these models and integrate them into practical applications.",
    },
    {
      icon: "about/uiIcon.png",
      title: "Frontend Developer",
      text:
        "I design and develop dashboards that let users interact with the models and explore their results intuitively.",
    },
  ];

  const listRef = useRef(null);
  const imgWrapRef = useRef(null);

  useEffect(() => {
    if (!listRef.current || !imgWrapRef.current) return;

    const mql = window.matchMedia("(min-width: 768px)");

    const update = () => {
      if (!listRef.current || !imgWrapRef.current) return;
      if (mql.matches) {
        const h = listRef.current.getBoundingClientRect().height;
        imgWrapRef.current.style.height = `${h}px`;
      } else {
        // on mobile let it size naturally (image hidden anyway)
        imgWrapRef.current.style.height = "auto";
      }
    };

    // Keep in sync with content/resize
    const ro = new ResizeObserver(update);
    ro.observe(listRef.current);
    window.addEventListener("resize", update);

    // initial
    update();

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section id="about" className="relative mx-auto mt-24 max-w-6xl rounded-2xl px-6 py-16">
      <h2 className="text-3xl font-bold tracking-wide uppercase">About</h2>

      <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-start">
        {/* Image column (height matched to list on md+) */}
        <div ref={imgWrapRef} className="hidden overflow-hidden rounded-xl shadow-soft md:block md:w-1/3">
          <img
            src={getImageUrl("about/working.jpg")}
            alt="Me working on phase synchrony for MoveAhead"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Items column */}
        <ul ref={listRef} className="flex w-full flex-col gap-6 text-slate-200 md:w-2/3">
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
