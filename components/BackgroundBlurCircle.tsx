// @/components/BackgroundBlurCircle.tsx
"use client";

import { useEffect, useState } from "react";

export default function BackgroundBlurCircle() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let animationFrame: number;

    const updatePosition = () => {
      setSmoothPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.1, // Suavização
        y: prev.y + (mousePosition.y - prev.y) * 0.1,
      }));
      animationFrame = requestAnimationFrame(updatePosition);
    };

    animationFrame = requestAnimationFrame(updatePosition);

    return () => cancelAnimationFrame(animationFrame);
  }, [mousePosition]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px at ${smoothPosition.x}px ${smoothPosition.y}px, rgba(63, 198, 135, 0.15), transparent 80%)`,
      }}
    />
  );
}
