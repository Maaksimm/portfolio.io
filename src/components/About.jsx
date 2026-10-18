import Reveal from "./Reveal.jsx";

export default function About({ content }) {
  const a = content.about;
  return (
    <section id="about">
      <div className="wrap">
        <Reveal>
          <div className="head">
            <h2 className="head__title">{a.title}</h2>
          </div>
          <p className="about__text" dangerouslySetInnerHTML={{ __html: a.html }} />
        </Reveal>
      </div>
    </section>
  );
}
