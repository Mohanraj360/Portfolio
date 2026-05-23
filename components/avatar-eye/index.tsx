"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function AvatarEye() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Layout center percentages calibrated perfectly for the vector face illustration
  const eyeTargets = [
    { xPercent: 0.452, yPercent: 0.355, radius: 10 }, // Left Eye Center
    { xPercent: 0.548, yPercent: 0.355, radius: 10 }  // Right Eye Center
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let mouse = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      drawEyes();
    };

    const resizeCanvas = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      drawEyes();
    };

    const drawEyes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const rect = canvas.getBoundingClientRect();

      eyeTargets.forEach((target) => {
        const eyeX = rect.left + target.xPercent * canvas.width;
        const eyeY = rect.top + target.yPercent * canvas.height;

        const angle = Math.atan2(mouse.y - eyeY, mouse.x - eyeX);

        const maxOffset = 5;
        const offsetX = Math.cos(angle) * maxOffset;
        const offsetY = Math.sin(angle) * maxOffset;

        const pupilX = target.xPercent * canvas.width + offsetX;
        const pupilY = target.yPercent * canvas.height + offsetY;

        // Draw Iris
        ctx.beginPath();
        ctx.arc(pupilX, pupilY, target.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#2d7d52"; // Matches vector eye color
        ctx.fill();

        // Gleam reflection highlight
        ctx.beginPath();
        ctx.arc(pupilX - 3, pupilY - 3, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resizeCanvas);
    
    // Slight timeout ensures container width/height have completely computed on first render
    const timer = setTimeout(resizeCanvas, 100);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ position: "relative", width: "260px", height: "260px", display: "inline-block" }}>
      {/* FIXED: Path now reflects your public/images/ folder structure */}
      <Image
        src="/images/avatar-vector.png"
        alt="Interactive Avatar"
        fill
        sizes="260px"
        priority
        style={{ objectFit: "contain" }}
        unoptimized
      />
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 2
        }}
      />
    </div>
  );
}
