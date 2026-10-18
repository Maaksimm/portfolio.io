import { useState } from "react";

function ThemeIcon({ theme }) {
  return theme === "dark" ? (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

export default function Nav({ content, lang, setLang, theme, toggleTheme, active }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav__row">
        <a className="nav__mark" href="#top" onClick={() => setOpen(false)}>
          Maksim<i>.</i>
        </a>
        <ul className={"nav__links" + (open ? " nav__links--open" : "")}>
          {content.nav.links.map(([id, label]) => (
            <li key={id}>
              <a
                className={"nav__link" + (active === id ? " nav__link--active" : "")}
                href={"#" + id}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="nav__tools">
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
            <button
              className="nav__theme"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Light theme" : "Dark theme"}
              title={theme === "dark" ? "Light" : "Dark"}
            >
              <ThemeIcon theme={theme} />
            </button>
          </li>
        </ul>
        <button className="nav__toggle" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          {open ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
}
