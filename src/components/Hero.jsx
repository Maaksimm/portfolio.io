export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <div className="hero__role">Full-Stack Developer</div>
        <h1 className="hero__title">
          Створюю інтерфейси,
          <br />
          <em>яким довіряють.</em>
        </h1>
        <p className="hero__lede">
          Full-Stack розробник з практичним досвідом командної розробки реальних проєктів:
          впевнено на фронтенді, розвиваюсь у бекенді на Python і Django. Повністю готовий до
          повноцінної зайнятості.
        </p>
        <div className="hero__meta">
          <div className="hero__stat">
            <b>6</b>
            <span>місяців в ITLEO Academy</span>
          </div>
          <div className="hero__stat">
            <b>4</b>
            <span>роки навчання в політехніці</span>
          </div>
          <div className="hero__stat">
            <b>2</b>
            <span>мови вільного спілкування</span>
          </div>
        </div>
      </div>
    </header>
  );
}
