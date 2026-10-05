import photo from "../assets/photo.jpg";

export default function Hero({ content }) {
  const h = content.hero;
  return (
    <header className="hero">
      <div className="wrap">
        <div className="hero__row">
          <div className="hero__main">
            <div className="hero__role">{h.role}</div>
            <h1 className="hero__title">
              {h.titleLine1}
              <br />
              <em>{h.titleEm}</em>
            </h1>
            <p className="hero__lede">{h.lede}</p>
            <div className="hero__meta">
              {h.stats.map((s) => (
                <div className="hero__stat" key={s.l}>
                  <b>{s.v}</b>
                  <span>{s.l}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero__photo">
            <img src={photo} alt="Pecherskyi Maksym" />
          </div>
        </div>
      </div>
    </header>
  );
}
