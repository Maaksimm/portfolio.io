import { useRef } from "react";
import { useReveal } from "../hooks/useReveal.js";

export default function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const visible = useReveal(ref, 0.12);
  return (
    <div
      ref={ref}
      className={"reveal" + (visible ? " reveal--in" : "") + (className ? " " + className : "")}
      style={delay ? { transitionDelay: delay + "ms" } : undefined}
    >
      {children}
    </div>
  );
}
