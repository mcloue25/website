import React from "react";

const items = [
  { value: "5+ years", label: "Applied ML and computer vision experience" },
  { value: "First Class Honours", label: "MSc Advanced Artificial Intelligence at UCD" },
  { value: "First Class Honours", label: "BSc Computer Science" },
  { value: "2026", label: "Research manuscript under review" },
];

export const Snapshot = () => {
  return (
    <section aria-label="Professional snapshot" className="mx-auto mt-12 max-w-6xl px-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <article key={item.label} className="card p-5">
            <p className="text-3xl font-bold text-slate-950">{item.value}</p>
            <p className="mt-2 text-sm leading-6 text-subtle">{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
