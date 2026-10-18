import { useEffect, useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Timeline from "./components/Timeline.jsx";
import Languages from "./components/Languages.jsx";
import Footer from "./components/Footer.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import { useScrollSpy } from "./hooks/useScrollSpy.js";
import { CONTENT } from "./content.js";

function load(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

function save(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* storage may be blocked — ignore */
  }
}

export default function App() {
  const [lang, setLang] = useState(() => {
    const l = load("lang", "ua");
    return CONTENT[l] ? l : "ua";
  });
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || "dark");
  const content = CONTENT[lang];

  useEffect(() => {
    document.documentElement.lang = lang === "ua" ? "uk" : "en";
    save("lang", lang);
  }, [lang]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    save("theme", theme);
  }, [theme]);

  const active = useScrollSpy(content.nav.links.map(([id]) => id));
  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <>
      <ScrollProgress />
      <Nav
        content={content}
        lang={lang}
        setLang={setLang}
        theme={theme}
        toggleTheme={toggleTheme}
        active={active}
      />
      <Hero content={content} />
      <About content={content} />
      <Skills content={content} />
      <Projects content={content} />
      <Timeline id="experience" title={content.experience.title} items={content.experience.items} prefix="e" />
      <Timeline id="education" title={content.education.title} items={content.education.items} prefix="d" />
      <Languages content={content} />
      <Footer content={content} />
    </>
  );
}
