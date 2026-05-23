"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const EYES = [
  { xPct: 0.4615, yPct: 0.41 }, // Left eye - precise center
  { xPct: 0.5385, yPct: 0.41 }, // Right eye - precise center
];

const CONTAINER_SIZE = 260;
const EYE_SCLERA_WIDTH = 10;
const EYE_SCLERA_HEIGHT = 4.5;
const PUPIL_RADIUS = 3.8;
const MAX_OFFSET = 2.5;
const GLINT_SIZE = 1;

export default function AvatarEye() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pupilRefs = useRef<(SVGCircleElement | null)[]>([null, null]);
  const glintRefs = useRef<(SVGCircleElement | null)[]>([null, null]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const track = (mx: number, my: number) => {
      const rect = container.getBoundingClientRect();

      EYES.forEach((eye, i) => {
        const pupil = pupilRefs.current[i];
        const glint = glintRefs.current[i];
        if (!pupil || !glint) return;

        const eyeX = rect.left + rect.width * eye.xPct;
        const eyeY = rect.top + rect.height * eye.yPct;

        const dx = mx - eyeX;
        const dy = my - eyeY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let ox = 0,
          oy = 0;
        if (dist > 0) {
          const angle = Math.atan2(dy, dx);
          const offset = Math.min(dist, MAX_OFFSET);
          ox = Math.cos(angle) * offset;
          oy = Math.sin(angle) * offset;
        }

        pupil.setAttribute("cx", String(ox));
        pupil.setAttribute("cy", String(oy));

        glint.setAttribute("cx", String(ox + 1.2));
        glint.setAttribute("cy", String(oy - 1.2));
      });
    };

    const onMouse = (e: MouseEvent) => track(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        track(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

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
      style={{
        position: "relative",
        width: `${CONTAINER_SIZE}px`,
        height: `${CONTAINER_SIZE}px`,
        overflow: "hidden",
        borderRadius: "4px",
      }}
    >
      <Image
        src="/images/Avatar-vector.jpeg"
        alt="Avatar"
        fill
        sizes={`${CONTAINER_SIZE}px`}
        priority
        draggable={false}
        style={{
          objectFit: "fill",
          zIndex: 1,
        }}
      />

      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 2,
        }}
        viewBox={`0 0 ${CONTAINER_SIZE} ${CONTAINER_SIZE}`}
      >
        {EYES.map((eye, i) => {
          const cx = CONTAINER_SIZE * eye.xPct;
          const cy = CONTAINER_SIZE * eye.yPct;

          return (
            <g key={i} transform={`translate(${cx} ${cy})`}>
              {/* White sclera */}
              <ellipse
                cx="0"
                cy="0"
                rx={EYE_SCLERA_WIDTH / 2}
                ry={EYE_SCLERA_HEIGHT / 2}
                fill="white"
              />

              {/* Black pupil */}
              <circle
                ref={(el) => {
                  pupilRefs.current[i] = el;
                }}
                cx="0"
                cy="0"
                r={PUPIL_RADIUS}
                fill="#0A0A0A"
              />

              {/* White glint */}
              <circle
                ref={(el) => {
                  glintRefs.current[i] = el;
                }}
                cx={1.2}
                cy={-1.2}
                r={GLINT_SIZE}
                fill="white"
                opacity="0.95"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
