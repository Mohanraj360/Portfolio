"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function AvatarEye() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pupilRef = useRef<SVGCircleElement>(null);
  const hlRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const pupil = pupilRef.current;
    const hl = hlRef.current;
    if (!container || !pupil || !hl) return;

    // Left eye center as fraction of rendered image size (320x383)
    const EYE_X_PCT = 0.418;
    const EYE_Y_PCT = 0.333;
    const MAX_MOVE = 5;

    const track = (mx: number, my: number) => {
      const rect = container.getBoundingClientRect();
      const eyeX = rect.left + rect.width * EYE_X_PCT;
      const eyeY = rect.top + rect.height * EYE_Y_PCT;
      const dx = mx - eyeX;
      const dy = my - eyeY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const f = dist > MAX_MOVE ? MAX_MOVE / dist : 1;
      const ox = dx * f;
      const oy = dy * f;
      pupil.setAttribute("cx", String(ox));
      pupil.setAttribute("cy", String(oy));
      hl.setAttribute("cx", String(ox + 2.5));
      hl.setAttribute("cy", String(oy - 2.5));
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
    <div
      ref={containerRef}
      style={{ position: "relative", width: "320px", height: "383px" }}
    >
      <Image
        src="/images/Avatar-vector.jpeg"
        alt="Mohanraj Avatar"
        fill
        sizes="320px"
        priority
        draggable={false}
        style={{ objectFit: "cover", borderRadius: "12px" }}
      />

      {/* ONE eye overlay on left eye only — black eyeball */}
      <svg
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}
        viewBox={`0 0 320 383`}
      >
        <g transform={`translate(${320 * 0.418} ${383 * 0.333})`}>
          <ellipse cx="0" cy="0" rx="13" ry="9" fill="white" opacity="0.8"/>
          <circle ref={pupilRef} cx="0" cy="0" r="6.5" fill="#080808"/>
          <circle ref={hlRef} cx="2.5" cy="-2.5" r="2" fill="white" opacity="0.95"/>
        </g>
      </svg>
    </div>
  );
}
