import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("revealActive");
          observer.unobserve(element); // Reveal once and keep visible
        }
      },
      { threshold: 0.15 } // Triggers when 15% of element enters view
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return ref;
}