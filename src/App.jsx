import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Timeline from "./components/Timeline.jsx";
import Languages from "./components/Languages.jsx";
import Footer from "./components/Footer.jsx";
import { EXPERIENCE, EDUCATION } from "./data.js";

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Timeline id="experience" title="Досвід роботи" items={EXPERIENCE} prefix="e" />
      <Timeline id="education" title="Освіта" items={EDUCATION} prefix="d" />
      <Languages />
      <Footer />
    </>
  );
}
