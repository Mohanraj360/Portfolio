"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function AvatarEye() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pupilRef = useRef<SVGCircleElement>(null);
  const hlRef = useRef<SVGCircleElement>(null);

  // Exact eye positions (measured via pixel analysis of 728x866 image)
  // Rendered at 300x357 → same percentages apply
  const LEFT_EYE_X = 0.374;  // viewer's left eye
  const LEFT_EYE_Y = 0.394;
  const RIGHT_EYE_X = 0.621; // viewer's right eye
  const RIGHT_EYE_Y = 0.395;

  useEffect(() => {
    const container = containerRef.current;
    const pupil = pupilRef.current;
    const hl = hlRef.current;
    if (!container || !pupil || !hl) return;

    const MAX_MOVE = 5;

    const track = (mx: number, my: number) => {
      const rect = container.getBoundingClientRect();
      // Track from the left eye center
      const eyeX = rect.left + rect.width * LEFT_EYE_X;
      const eyeY = rect.top + rect.height * LEFT_EYE_Y;
      const dx = mx - eyeX;
      const dy = my - eyeY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const f = dist > MAX_MOVE ? MAX_MOVE / dist : 1;
      pupil.setAttribute("cx", String(dx * f));
      pupil.setAttribute("cy", String(dy * f));
      hl.setAttribute("cx", String(dx * f + 2.5));
      hl.setAttribute("cy", String(dy * f - 2.5));
    };

    const onMouse = (e: MouseEvent) => track(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => track(e.touches[0].clientX, e.touches[0].clientY);
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("touchmove", onTouch, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("touchmove", onTouch);
    };
  }, [LEFT_EYE_X, LEFT_EYE_Y]);

  // Rendered size keeps original aspect ratio: 728/866 * 300 ≈ 252 → use 300x357
  const W = 300;
  const H = 357;

  return (
    <div ref={containerRef} style={{ position: "relative", width: `${W}px`, height: `${H}px` }}>
      <Image
        src="/images/Avatar-vector.jpeg"
        alt="Mohanraj Avatar"
        fill
        sizes={`${W}px`}
        priority
        draggable={false}
        style={{ objectFit: "fill", borderRadius: "8px" }}
      />

      <svg
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}
        viewBox={`0 0 ${W} ${H}`}
      >
        {/* Cover BOTH original green eyes with skin tone */}
        <ellipse cx={W * LEFT_EYE_X}  cy={H * LEFT_EYE_Y}  rx="20" ry="13" fill="#5C3317"/>
        <ellipse cx={W * RIGHT_EYE_X} cy={H * RIGHT_EYE_Y} rx="20" ry="13" fill="#5C3317"/>

        {/* Left eye — white + black tracking eyeball only */}
        <g transform={`translate(${W * LEFT_EYE_X} ${H * LEFT_EYE_Y})`}>
          <ellipse cx="0" cy="0" rx="18" ry="12" fill="white"/>
          <circle ref={pupilRef} cx="0" cy="0" r="7" fill="#0A0A0A"/>
          <circle ref={hlRef}    cx="2.5" cy="-2.5" r="2.2" fill="white" opacity="0.9"/>
        </g>

        {/* Right eye — static, just white + black iris (no tracking) */}
        <g transform={`translate(${W * RIGHT_EYE_X} ${H * RIGHT_EYE_Y})`}>
          <ellipse cx="0" cy="0" rx="18" ry="12" fill="white"/>
          <circle cx="0" cy="0" r="7" fill="#0A0A0A"/>
          <circle cx="2.5" cy="-2.5" r="2.2" fill="white" opacity="0.9"/>
        </g>
      </svg>
    </div>
  );
}
