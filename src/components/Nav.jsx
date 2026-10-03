import { useState } from "react";

export default function Nav({ content, lang, setLang }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav__row">
        <span className="nav__mark">
          Maksim<i>.</i>
        </span>
        <ul className={"nav__links" + (open ? " nav__links--open" : "")}>
          {content.nav.links.map(([id, label]) => (
            <li key={id}>
              <a className="nav__link" href={"#" + id} onClick={() => setOpen(false)}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <div className="nav__lang">
              <button
                className={"nav__lang-btn" + (lang === "ua" ? " nav__lang-btn--active" : "")}
                onClick={() => setLang("ua")}
              >
                UA
              </button>
              <button
                className={"nav__lang-btn" + (lang === "en" ? " nav__lang-btn--active" : "")}
                onClick={() => setLang("en")}
              >
                EN
              </button>
            </div>
          </li>
        </ul>
        <button className="nav__toggle" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          {open ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
}
