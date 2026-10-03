export default function Footer({ content }) {
  const f = content.footer;
  return (
    <footer>
      <div className="wrap foot__row">
        <span className="foot__text">
          © {new Date().getFullYear()} Maksim — {f.text}
        </span>
        <button className="foot__top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          {f.top}
        </button>
      </div>
    </footer>
  );
}
