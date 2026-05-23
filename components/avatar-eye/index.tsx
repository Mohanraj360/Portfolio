"use client";

import { useEffect, useRef } from "react";

export default function AvatarEye() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Precise layout target coordinates mapped to the image proportions
  const eyeTargets = [
    { xPercent: 0.443, yPercent: 0.358, radius: 8 }, // Left Eye Center
    { xPercent: 0.552, yPercent: 0.358, radius: 8 }  // Right Eye Center
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const img = imgRef.current;
    const container = containerRef.current;
    if (!canvas || !img || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let mouse = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      drawEyes();
    };

    const resizeCanvas = () => {
      // Sync canvas sizing perfectly to the active image layout dimensions
      canvas.width = img.clientWidth;
      canvas.height = img.clientHeight;
      drawEyes();
    };

    const drawEyes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const rect = canvas.getBoundingClientRect();

      eyeTargets.forEach((target) => {
        // Calculate the absolute positions dynamically
        const eyeX = rect.left + target.xPercent * canvas.width;
        const eyeY = rect.top + target.yPercent * canvas.height;

        const angle = Math.atan2(mouse.y - eyeY, mouse.x - eyeX);
        
        const maxOffset = 3;
        const offsetX = Math.cos(angle) * maxOffset;
        const offsetY = Math.sin(angle) * maxOffset;

        const pupilX = target.xPercent * canvas.width + offsetX;
        const pupilY = target.yPercent * canvas.height + offsetY;

        // 1. Draw a clean white base layer to cover up old static pupils
        ctx.beginPath();
        ctx.arc(target.xPercent * canvas.width, target.yPercent * canvas.height, target.radius + 1, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();

        // 2. Draw the dynamic tracking black iris on top
        ctx.beginPath();
        ctx.arc(pupilX, pupilY, target.radius - 1, 0, Math.PI * 2);
        ctx.fillStyle = "#000000";
        ctx.fill();

        // 3. Realistic catch-light glint reflection
        ctx.beginPath();
        ctx.arc(pupilX - 2, pupilY - 2, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resizeCanvas);
    
    if (img.complete) {
      resizeCanvas();
    } else {
      img.addEventListener("load", resizeCanvas);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        position: "relative", 
        width: "280px",       // Standard responsive container size
        height: "280px",      // Perfect square constraints
        display: "inline-block",
        overflow: "hidden",
        borderRadius: "12px"  // Smooth avatar borders
      }}
    >
      <img
        ref={imgRef}
        src="/images/Avatar-vector.jpeg"
        alt="Interactive Portfolio Avatar"
        style={{ 
          width: "100%", 
          height: "100%",
          display: "block",
          objectFit: "cover", // 🔹 This instantly crops out the black bars entirely like a stack crop
          pointerEvents: "none"
        }}
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
          zIndex: 5
        }}
      />
    </div>
  );
}
