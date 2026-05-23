"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

// Image: 1024x1024
// Left  eye lens center: pixel (460, 402) → 44.92%, 39.26%
// Right eye lens center: pixel (560, 410) → 54.68%, 40.05%
const EYES = [
  { xPct: 0.4492, yPct: 0.3926 },
  { xPct: 0.5468, yPct: 0.4005 },
];

const W = 300;
const H = 300; // 1024x1024 is square

export default function AvatarEye() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pupilRefs = useRef<(SVGCircleElement | null)[]>([null, null]);
  const hlRefs    = useRef<(SVGCircleElement | null)[]>([null, null]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const MAX = 4;

    const track = (mx: number, my: number) => {
      const rect = container.getBoundingClientRect();
      EYES.forEach((eye, i) => {
        const pupil = pupilRefs.current[i];
        const hl    = hlRefs.current[i];
        if (!pupil || !hl) return;
        const eyeX = rect.left + rect.width  * eye.xPct;
        const eyeY = rect.top  + rect.height * eye.yPct;
        const dx = mx - eyeX;
        const dy = my - eyeY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const f = dist > MAX ? MAX / dist : 1;
        const ox = dx * f, oy = dy * f;
        pupil.setAttribute("cx", String(ox));
        pupil.setAttribute("cy", String(oy));
        hl.setAttribute("cx", String(ox + 2));
        hl.setAttribute("cy", String(oy - 2));
      });
    };

    const onMouse = (e: MouseEvent) => track(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => track(e.touches[0].clientX, e.touches[0].clientY);
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("touchmove", onTouch, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("touchmove", onTouch);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ position: "relative", width: `${W}px`, height: `${H}px` }}>
      <Image
        src="/images/Avatar-vector.png"
        alt="Mohanraj Avatar"
        fill
        sizes={`${W}px`}
        priority
        draggable={false}
        style={{ objectFit: "fill" }}
      />

      <svg
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}
        viewBox={`0 0 ${W} ${H}`}
      >
        {EYES.map((eye, i) => {
          const cx = W * eye.xPct;
          const cy = H * eye.yPct;
          return (
            <g key={i} transform={`translate(${cx} ${cy})`}>
              {/* White eye — original bigger values */}
              <ellipse cx="0" cy="0" rx="16" ry="11" fill="white"/>
              {/* Black pupil */}
              <circle ref={el => { pupilRefs.current[i] = el; }} cx="0" cy="0" r="6" fill="#0A0A0A"/>
              {/* Highlight */}
              <circle ref={el => { hlRefs.current[i] = el; }} cx="2" cy="-2" r="1.8" fill="white" opacity="0.9"/>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
