import Reveal from "./Reveal.jsx";
import { spotlight } from "../hooks/spotlight.js";

export default function Projects({ content }) {
  const p = content.projects;
  return (
    <section id="projects">
      <div className="wrap">
        <Reveal>
          <div className="head">
            <h2 className="head__title">{p.title}</h2>
          </div>
          {p.note && <div className="projects__note">{p.note}</div>}
        </Reveal>
        <div className="projects__grid">
          {p.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 90}>
              <div className="project" onMouseMove={spotlight}>
                <div className="project__name">{item.name}</div>
                <div className="project__role">{item.role}</div>
                <div className="project__period">{item.period}</div>
                <div className="project__body">{item.body}</div>
                <div className="project__tags">
                  {item.tags.map((t) => (
                    <span className="project__tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
