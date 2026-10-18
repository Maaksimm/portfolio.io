// onMouseMove handler: lets CSS draw a soft glow that follows the cursor.
export function spotlight(e) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", e.clientX - r.left + "px");
  el.style.setProperty("--my", e.clientY - r.top + "px");
}
