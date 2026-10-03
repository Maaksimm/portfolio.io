import { useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Timeline from "./components/Timeline.jsx";
import Languages from "./components/Languages.jsx";
import Footer from "./components/Footer.jsx";
import { CONTENT } from "./content.js";

export default function App() {
  const [lang, setLang] = useState("ua");
  const content = CONTENT[lang];

  return (
    <>
      <Nav content={content} lang={lang} setLang={setLang} />
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
