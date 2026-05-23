"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function AvatarEye() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Layout center percentages for the vector illustration eyes
  const eyeTargets = [
    { xPercent: 0.452, yPercent: 0.355, radius: 10 }, // Left Eye
    { xPercent: 0.548, yPercent: 0.355, radius: 10 }  // Right Eye
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
        ctx.fillStyle = "#2d7d52"; 
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
    
    // Tiny delay ensures the parent container layout has calculated its dimensions completely
    const timer = setTimeout(resizeCanvas, 100);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ position: "relative", width: "260px", height: "260px", display: "inline-block" }}>
      {/* Next.js Optimized Image Element */}
      <Image
        src="/avatar-vector.png"
        alt="Interactive Avatar"
        fill
        sizes="260px"
        priority
        style={{ objectFit: "contain" }}
        unoptimized // Prevents caching mismatches during local changes
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
          z-index: 2
        }}
      />
    </div>
  );
}
