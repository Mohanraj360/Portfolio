"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

// Image natural size: 728 x 866
// Left eye center:  pixel (302, 205) → 41.53%, 23.67%
// Right eye center: pixel (419, 204) → 57.54%, 23.55%
const EYES = [
  { xPct: 0.4153, yPct: 0.2367 }, // left eye
  { xPct: 0.5754, yPct: 0.2355 }, // right eye
];

const W = 300;
const H = Math.round(300 * (866 / 728)); // 357 — preserves aspect ratio

export default function AvatarEye() {
  const containerRef = useRef<HTMLDivElement>(null);
  // Two pupils — one per eye
  const pupilRefs = useRef<(SVGCircleElement | null)[]>([null, null]);
  const hlRefs    = useRef<(SVGCircleElement | null)[]>([null, null]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const MAX = 4; // max px movement in SVG coords

    const track = (mx: number, my: number) => {
      const rect = container.getBoundingClientRect();

      EYES.forEach((eye, i) => {
        const pupil = pupilRefs.current[i];
        const hl    = hlRefs.current[i];
        if (!pupil || !hl) return;

        // Eye center in screen coords
        const eyeX = rect.left + rect.width  * eye.xPct;
        const eyeY = rect.top  + rect.height * eye.yPct;

        const dx = mx - eyeX;
        const dy = my - eyeY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const f = dist > MAX ? MAX / dist : 1;
        const ox = dx * f;
        const oy = dy * f;

        pupil.setAttribute("cx", String(ox));
        pupil.setAttribute("cy", String(oy));
        hl.setAttribute("cx", String(ox + 1.8));
        hl.setAttribute("cy", String(oy - 1.8));
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
      {/* Actual avatar image */}
      <Image
        src="/images/Avatar-vector.jpeg"
        alt="Mohanraj Avatar"
        fill
        sizes={`${W}px`}
        priority
        draggable={false}
        style={{ objectFit: "fill" }}
      />

      {/* SVG overlay — covers original green eyes, adds black tracking eyeballs */}
      <svg
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}
        viewBox={`0 0 ${W} ${H}`}
      >
        {EYES.map((eye, i) => {
          const cx = W * eye.xPct;
          const cy = H * eye.yPct;
          return (
            <g key={i} transform={`translate(${cx} ${cy})`}>
              {/* Cover original green iris with white eye */}
              <ellipse cx="0" cy="0" rx="16" ry="11" fill="white"/>
              {/* Black tracking pupil */}
              <circle
                ref={el => { pupilRefs.current[i] = el; }}
                cx="0" cy="0" r="6"
                fill="#0A0A0A"
              />
              {/* Highlight */}
              <circle
                ref={el => { hlRefs.current[i] = el; }}
                cx="1.8" cy="-1.8" r="1.8"
                fill="white" opacity="0.9"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
