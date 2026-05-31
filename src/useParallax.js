import { useEffect, useRef, useState } from "react";

export function useMouseParallax() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return mouse;
}

export function useMagneticEffect(strength = 40) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0, scale: 1 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = Math.max(rect.width, rect.height) * 1.5;

      if (dist < maxDist) {
        const pull = (1 - dist / maxDist);
        setOffset({
          x: dx * pull * (strength / 100),
          y: dy * pull * (strength / 100),
          scale: 1 + pull * 0.08,
        });
      } else {
        setOffset({ x: 0, y: 0, scale: 1 });
      }
    };

    const handleLeave = () => setOffset({ x: 0, y: 0, scale: 1 });

    window.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [strength]);

  return { ref, offset };
}
