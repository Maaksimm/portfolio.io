import { useRef, useState, useEffect } from "react";
import { useReveal } from "../hooks/useReveal.js";

function Skill({ s }) {
  const ref = useRef(null);
  const visible = useReveal(ref);
  return (
    <div ref={ref} className={"skill" + (visible ? " skill--visible" : "")}>
      <div className="skill__top">
        <span className="skill__name">{s.name}</span>
        <span className="skill__level">{s.level}</span>
      </div>
      <div className="skill__bar">
        <i style={{ width: s.pct + "%" }}></i>
      </div>
    </div>
  );
}

export default function Skills({ content }) {
  const sk = content.skills;
  const [tab, setTab] = useState("all");

  // reset to "all" if the active tab doesn't exist after a language switch
  useEffect(() => {
    if (!sk.tabs.find((t) => t.id === tab)) setTab("all");
  }, [sk]);

  const shown = tab === "all" ? sk.items : sk.items.filter((s) => s.cat === tab);

  return (
    <section id="skills" className="skills">
      <div className="wrap">
        <div className="head">
          <h2 className="head__title">{sk.title}</h2>
          <span className="head__count">
            {shown.length} {sk.of} {sk.items.length}
          </span>
        </div>
        <div className="skills__tabs">
          {sk.tabs.map((t) => (
            <button
              key={t.id}
              className={"skills__tab" + (tab === t.id ? " skills__tab--active" : "")}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="skills__grid">
          {shown.map((s) => (
            <Skill key={s.name} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
