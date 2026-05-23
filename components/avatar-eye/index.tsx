"use client";

import { useEffect, useRef } from "react";

export default function AvatarEye() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  // Exact geometric layout centers calibrated for your vector avatar illustration
  const eyeTargets = [
    { xPercent: 0.452, yPercent: 0.355, radius: 10 }, // Left Eye
    { xPercent: 0.548, yPercent: 0.355, radius: 10 }  // Right Eye
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const img = imgRef.current;
    if (!canvas || !img) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let mouse = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      drawEyes();
    };

    const resizeCanvas = () => {
      canvas.width = img.clientWidth;
      canvas.height = img.clientHeight;
      drawEyes();
    };

    const drawEyes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const rect = canvas.getBoundingClientRect();

      eyeTargets.forEach((target) => {
        // Find absolute screen coordinates of the eye centers
        const eyeX = rect.left + target.xPercent * canvas.width;
        const eyeY = rect.top + target.yPercent * canvas.height;

        // Calculate gaze tracking angle
        const angle = Math.atan2(mouse.y - eyeY, mouse.x - eyeX);

        // Movement constraint boundary inside vector sockets
        const maxOffset = 5;
        const offsetX = Math.cos(angle) * maxOffset;
        const offsetY = Math.sin(angle) * maxOffset;

        const pupilX = target.xPercent * canvas.width + offsetX;
        const pupilY = target.yPercent * canvas.height + offsetY;

        // Render dynamic matching green irises
        ctx.beginPath();
        ctx.arc(pupilX, pupilY, target.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#2d7d52"; 
        ctx.fill();

        // White reflection gleam dot
        ctx.beginPath();
        ctx.arc(pupilX - 3, pupilY - 3, 2, 0, Math.PI * 2);
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
      img.removeEventListener("load", resizeCanvas);
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "260px", display: "inline-block" }}>
      <img
        ref={imgRef}
        src="/avatar-vector.png"
        alt="Interactive Avatar"
        style={{ width: "100%", display: "block" }}
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
        }}
      />
    </div>
  );
}
