import { useEffect, useState } from "react";

// Returns the id of the section currently in the middle of the viewport.
export function useScrollSpy(ids) {
  const [active, setActive] = useState("");
  const key = ids.join(",");

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    els.forEach((el) => io.observe(el));

    const onScroll = () => {
      if (window.scrollY < 240) setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [key]);

  return active;
}
