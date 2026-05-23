"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const CONTAINER_SIZE = 260;
const EYE_WIDTH = 10;
const EYE_HEIGHT = 4.5;
const PUPIL_SIZE = 3.8;
const MAX_OFFSET = 2.5;

const EYES = [
  { topPct: 35.5, leftPct: 44.0 }, // Left lens - perfectly centered
  { topPct: 35.5, leftPct: 55.6 }, // Right lens - perfectly centered
];

export default function AvatarEye() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftPupilRef = useRef<HTMLDivElement>(null);
  const rightPupilRef = useRef<HTMLDivElement>(null);
  
  const pupilRefs = [leftPupilRef, rightPupilRef];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const track = (mx: number, my: number) => {
      const rect = container.getBoundingClientRect();

      pupilRefs.forEach((pupilRef, i) => {
        if (!pupilRef.current) return;

        const eyePos = EYES[i];
        const eyeX = rect.left + (rect.width * eyePos.leftPct) / 100;
        const eyeY = rect.top + (rect.height * eyePos.topPct) / 100;

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

        pupilRef.current.style.transform = `translate(${ox}px, ${oy}px)`;
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

      {/* 🔹 LEFT EYE CONTAINER */}
      <div
        style={{
          position: "absolute",
          top: `${EYES[0].topPct}%`,
          left: `${EYES[0].leftPct}%`,
          width: `${EYE_WIDTH}px`,
          height: `${EYE_HEIGHT}px`,
          backgroundColor: "#ffffff",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        {/* Left Moving Pupil */}
        <div
          ref={leftPupilRef}
          style={{
            width: `${PUPIL_SIZE}px`,
            height: `${PUPIL_SIZE}px`,
            backgroundColor: "#0A0A0A",
            borderRadius: "50%",
            position: "relative",
            transition: "transform 0.02s ease-out",
          }}
        />
      </div>

      {/* 🔹 RIGHT EYE CONTAINER */}
      <div
        style={{
          position: "absolute",
          top: `${EYES[1].topPct}%`,
          left: `${EYES[1].leftPct}%`,
          width: `${EYE_WIDTH}px`,
          height: `${EYE_HEIGHT}px`,
          backgroundColor: "#ffffff",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        {/* Right Moving Pupil */}
        <div
          ref={rightPupilRef}
          style={{
            width: `${PUPIL_SIZE}px`,
            height: `${PUPIL_SIZE}px`,
            backgroundColor: "#0A0A0A",
            borderRadius: "50%",
            position: "relative",
            transition: "transform 0.02s ease-out",
          }}
        />
      </div>
    </div>
  );
}
