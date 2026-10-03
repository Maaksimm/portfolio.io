export default function About({ content }) {
  const a = content.about;
  return (
    <section id="about">
      <div className="wrap">
        <div className="head">
          <h2 className="head__title">{a.title}</h2>
        </div>
        <p className="about__text" dangerouslySetInnerHTML={{ __html: a.html }} />
      </div>
    </section>
  );
}
