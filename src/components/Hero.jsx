import { useEffect, useRef, useState } from "react";
import photo from "../assets/photo.jpg";
import { spotlight } from "../hooks/spotlight.js";

const reduced = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// число в статистиці «накручується» від 0 до значення при завантаженні
function Stat({ v, l }) {
  const m = String(v).match(/^(\d+)(.*)$/);
  const target = m ? parseInt(m[1], 10) : null;
  const suffix = m ? m[2] : "";
  const [n, setN] = useState(target === null || reduced() ? target : 0);

  useEffect(() => {
    if (target === null || reduced()) {
      setN(target);
      return;
    }
    // asdd
    let raf = 0;
    const t0 = performance.now();
    const dur = 1100;
    const tick = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);

  return (
    <div className="hero__stat">
      <b>{target === null ? v : n + suffix}</b>
      <span>{l}</span>
    </div>
  );
}

export default function Hero({ content }) {
  const h = content.hero;
  const photoRef = useRef(null);

  // нахил фото + відблиск, що слідує за курсором (тільки миша, без reduce-motion)
  const onMove = (e) => {
    const el = photoRef.current;
    if (!el || e.pointerType !== "mouse" || reduced()) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", ((0.5 - py) * 9).toFixed(2) + "deg");
    el.style.setProperty("--ry", ((px - 0.5) * 11).toFixed(2) + "deg");
    el.style.setProperty("--gx", (px * 100).toFixed(1) + "%");
    el.style.setProperty("--gy", (py * 100).toFixed(1) + "%");
  };
  const onLeave = () => {
    const el = photoRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <header className="hero" id="top" onMouseMove={spotlight}>
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
                <Stat key={s.l} v={s.v} l={s.l} />
              ))}
            </div>
          </div>

          <div
            className="hero__photo"
            ref={photoRef}
            onPointerMove={onMove}
            onPointerLeave={onLeave}
          >
            <div className="hero__frame">
              <img src={photo} alt="Pecherskyi Maksym" width="640" height="800" />
              <span className="hero__glare" aria-hidden="true" />
              {h.badge && (
                <span className="hero__badge">
                  <i aria-hidden="true" />
                  {h.badge}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
