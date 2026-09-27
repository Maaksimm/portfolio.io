import { useState } from "react";

function TimelineItem({ item, idx, openId, setOpenId, prefix }) {
  const id = prefix + idx;
  const open = openId === id;

  return (
    <div className={"t-item" + (open ? " t-item--open" : "")}>
      <button className="t-item__btn" onClick={() => setOpenId(open ? null : id)} aria-expanded={open}>
        <span>
          <span className="t-item__role">{item.role}</span>
          <span className="t-item__org" style={{ display: "block" }}>
            {item.org}
          </span>
        </span>
        <span className="t-item__period">{item.period}</span>
      </button>
      <div className="t-item__panel">
        <div className="t-item__body">
          {item.body}
          <div className="t-item__tags">
            {item.tags.map((t) => (
              <span key={t} className="t-item__tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Timeline({ id, title, items, prefix }) {
  const [openId, setOpenId] = useState(prefix + 0);

  return (
    <section id={id}>
      <div className="wrap">
        <div className="head">
          <h2 className="head__title">{title}</h2>
        </div>
        <div className="timeline">
          {items.map((it, i) => (
            <TimelineItem key={i} item={it} idx={i} openId={openId} setOpenId={setOpenId} prefix={prefix} />
          ))}
        </div>
      </div>
    </section>
  );
}
