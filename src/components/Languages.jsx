import { useRef } from "react";
import { LANGS } from "../data.js";
import { useReveal } from "../hooks/useReveal.js";

function Lang({ l }) {
  const ref = useRef(null);
  const visible = useReveal(ref);
  return (
    <div ref={ref} className={"lang" + (visible ? " lang--visible" : "")}>
      <div className="lang__top">
        <span className="lang__name">{l.name}</span>
        <span className="lang__level">{l.level}</span>
      </div>
      <div className="lang__bar">
        <i style={{ width: l.pct + "%" }}></i>
      </div>
    </div>
  );
}

export default function Languages() {
  return (
    <section id="languages">
      <div className="wrap">
        <div className="head">
          <h2 className="head__title">Мови</h2>
        </div>
        <div className="langs">
          {LANGS.map((l) => (
            <Lang key={l.name} l={l} />
          ))}
        </div>
      </div>
    </section>
  );
}
