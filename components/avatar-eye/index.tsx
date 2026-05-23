"use client";
import { useEffect, useRef } from "react";

export default function AvatarEye() {
  const svgRef = useRef<SVGSVGElement>(null);
  const eyeData = useRef([
    { iris: null as SVGCircleElement | null, pupil: null as SVGCircleElement | null, hl: null as SVGCircleElement | null, cx: 92, cy: 125, r: 10 },
    { iris: null as SVGCircleElement | null, pupil: null as SVGCircleElement | null, hl: null as SVGCircleElement | null, cx: 168, cy: 125, r: 10 },
  ]);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    eyeData.current[0].iris = svg.querySelector("#irisL");
    eyeData.current[0].pupil = svg.querySelector("#pupilL");
    eyeData.current[0].hl = svg.querySelector("#hlL");
    eyeData.current[1].iris = svg.querySelector("#irisR");
    eyeData.current[1].pupil = svg.querySelector("#pupilR");
    eyeData.current[1].hl = svg.querySelector("#hlR");

    const track = (mx: number, my: number) => {
      const rect = svg.getBoundingClientRect();
      const sx = 260 / rect.width;
      const sy = 300 / rect.height;
      const svgX = (mx - rect.left) * sx;
      const svgY = (my - rect.top) * sy;

      eyeData.current.forEach(e => {
        if (!e.iris || !e.pupil || !e.hl) return;
        const dx = svgX - e.cx;
        const dy = svgY - e.cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const f = dist > e.r ? e.r / dist : 1;
        const nx = e.cx + dx * f;
        const ny = e.cy + dy * f;
        e.iris.setAttribute("cx", String(nx));
        e.iris.setAttribute("cy", String(ny));
        e.pupil.setAttribute("cx", String(nx));
        e.pupil.setAttribute("cy", String(ny));
        e.hl.setAttribute("cx", String(nx + 2.2));
        e.hl.setAttribute("cy", String(ny - 2.2));
      });
    };

    const onMove = (e: MouseEvent) => track(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => track(e.touches[0].clientX, e.touches[0].clientY);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 260 300"
      width="200"
      height="230"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", filter: "drop-shadow(0 8px 32px rgba(168,85,247,0.25))" }}
    >
      {/* Shirt */}
      <path d="M50 300 L50 230 Q70 215 90 210 L130 225 L170 210 Q190 215 210 230 L210 300 Z" fill="#F0F0F0"/>
      <path d="M105 210 L130 240 L155 210 L145 205 L130 222 L115 205 Z" fill="#FFFFFF"/>
      <line x1="130" y1="240" x2="130" y2="295" stroke="#DDD" strokeWidth="1.5"/>
      <circle cx="130" cy="252" r="2.5" fill="#CCC"/>
      <circle cx="130" cy="265" r="2.5" fill="#CCC"/>
      <circle cx="130" cy="278" r="2.5" fill="#CCC"/>
      {/* Neck */}
      <rect x="112" y="195" width="36" height="26" rx="8" fill="#7B4A2A"/>
      {/* Head */}
      <ellipse cx="130" cy="130" rx="72" ry="78" fill="#8B5533"/>
      {/* Hair */}
      <ellipse cx="130" cy="72" rx="72" ry="36" fill="#1C1008"/>
      <rect x="58" y="70" width="20" height="50" rx="10" fill="#1C1008"/>
      <rect x="182" y="70" width="20" height="50" rx="10" fill="#1C1008"/>
      <path d="M60 90 Q80 52 130 50 Q180 52 200 90 Q170 68 130 70 Q90 68 60 90Z" fill="#1C1008"/>
      {/* Ears */}
      <ellipse cx="59" cy="128" rx="10" ry="14" fill="#7B4A2A"/>
      <ellipse cx="201" cy="128" rx="10" ry="14" fill="#7B4A2A"/>
      <ellipse cx="59" cy="128" rx="5" ry="8" fill="#6B3A1A"/>
      <ellipse cx="201" cy="128" rx="5" ry="8" fill="#6B3A1A"/>
      {/* Beard */}
      <ellipse cx="130" cy="178" rx="52" ry="26" fill="#1C1008"/>
      <ellipse cx="130" cy="164" rx="44" ry="16" fill="#8B5533"/>
      <path d="M108 158 Q120 165 130 162 Q140 165 152 158 Q140 155 130 157 Q120 155 108 158Z" fill="#1C1008"/>
      {/* Glasses */}
      <rect x="68" y="108" width="48" height="34" rx="9" fill="none" stroke="#111" strokeWidth="4"/>
      <rect x="144" y="108" width="48" height="34" rx="9" fill="none" stroke="#111" strokeWidth="4"/>
      <line x1="116" y1="122" x2="144" y2="122" stroke="#111" strokeWidth="3.5"/>
      <line x1="68" y1="120" x2="58" y2="116" stroke="#111" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="192" y1="120" x2="202" y2="116" stroke="#111" strokeWidth="3.5" strokeLinecap="round"/>
      {/* Eye whites */}
      <ellipse cx="92" cy="125" rx="19" ry="13" fill="white"/>
      <ellipse cx="168" cy="125" rx="19" ry="13" fill="white"/>
      {/* Left eye */}
      <circle id="irisL" cx="92" cy="125" r="8" fill="#2E6B4F"/>
      <circle id="pupilL" cx="92" cy="125" r="5" fill="#0D0804"/>
      <circle id="hlL" cx="94.2" cy="122.8" r="2.2" fill="white" opacity="0.9"/>
      {/* Right eye */}
      <circle id="irisR" cx="168" cy="125" r="8" fill="#2E6B4F"/>
      <circle id="pupilR" cx="168" cy="125" r="5" fill="#0D0804"/>
      <circle id="hlR" cx="170.2" cy="122.8" r="2.2" fill="white" opacity="0.9"/>
      {/* Eyebrows */}
      <path d="M68 104 Q92 96 116 102" fill="none" stroke="#1C1008" strokeWidth="5" strokeLinecap="round"/>
      <path d="M144 102 Q168 96 192 104" fill="none" stroke="#1C1008" strokeWidth="5" strokeLinecap="round"/>
      {/* Nose */}
      <path d="M124 140 Q118 155 122 162 Q130 166 138 162 Q142 155 136 140" fill="none" stroke="#6B3A1A" strokeWidth="2" strokeLinecap="round"/>
      <ellipse cx="130" cy="161" rx="10" ry="5" fill="#7B4A2A" opacity="0.5"/>
      {/* Smile */}
      <path d="M108 172 Q130 184 152 172" fill="none" stroke="#5A2A10" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Hands */}
      <ellipse cx="130" cy="270" rx="42" ry="16" fill="#7B4A2A"/>
      <ellipse cx="108" cy="265" rx="18" ry="12" fill="#7B4A2A"/>
      <ellipse cx="152" cy="265" rx="18" ry="12" fill="#7B4A2A"/>
      <ellipse cx="96" cy="260" rx="7" ry="5" fill="#6B3A1A"/>
      <ellipse cx="107" cy="257" rx="7" ry="5" fill="#6B3A1A"/>
      <ellipse cx="119" cy="256" rx="7" ry="5" fill="#6B3A1A"/>
      <ellipse cx="141" cy="256" rx="7" ry="5" fill="#6B3A1A"/>
      <ellipse cx="153" cy="257" rx="7" ry="5" fill="#6B3A1A"/>
      <ellipse cx="164" cy="260" rx="7" ry="5" fill="#6B3A1A"/>
    </svg>
  );
}
