export default function Projects({ content }) {
  const p = content.projects;
  return (
    <section id="projects">
      <div className="wrap">
        <div className="head">
          <h2 className="head__title">{p.title}</h2>
        </div>
        {p.note && <div className="projects__note">{p.note}</div>}
        <div className="projects__grid">
          {p.items.map((item) => (
            <div className="project" key={item.name}>
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
          ))}
        </div>
      </div>
    </section>
  );
}
