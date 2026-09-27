import { useRef, useState } from "react";
import { SKILLS, TABS } from "../data.js";
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

export default function Skills() {
  const [tab, setTab] = useState("all");
  const shown = tab === "all" ? SKILLS : SKILLS.filter((s) => s.cat === tab);

  return (
    <section id="skills" className="skills">
      <div className="wrap">
        <div className="head">
          <h2 className="head__title">Навички</h2>
          <span className="head__count">
            {shown.length} з {SKILLS.length}
          </span>
        </div>
        <div className="skills__tabs">
          {TABS.map((t) => (
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
