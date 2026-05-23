"use client";

import { useEffect, useRef } from "react";

export default function AvatarEye() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  // Pixel-perfect geometry anchors mapped to your glasses frame lenses
  const eyeTargets = [
    { xPercent: 0.443, yPercent: 0.358, radius: 6 }, // Left Eye
    { xPercent: 0.552, yPercent: 0.358, radius: 6 }  // Right Eye
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
        // Calculate the absolute position of the eyes dynamically on screen
        const eyeX = rect.left + target.xPercent * canvas.width;
        const eyeY = rect.top + target.yPercent * canvas.height;

        const angle = Math.atan2(mouse.y - eyeY, mouse.x - eyeX);
        
        // Keeps the pupil range locked inside the natural eyelids
        const maxOffset = 2;
        const offsetX = Math.cos(angle) * maxOffset;
        const offsetY = Math.sin(angle) * maxOffset;

        const pupilX = target.xPercent * canvas.width + offsetX;
        const pupilY = target.yPercent * canvas.height + offsetY;

        // 1. DIGITAL MASK PATCH: Covers up the old flat green pupil lines
        ctx.beginPath();
        ctx.arc(target.xPercent * canvas.width, target.yPercent * canvas.height, target.radius + 1, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff"; // Sclera White base fill
        ctx.fill();

        // 2. SEAMLESS REPLACEMENT: Draws your tracking black iris inside
        ctx.beginPath();
        ctx.arc(pupilX, pupilY, target.radius - 2, 0, Math.PI * 2);
        ctx.fillStyle = "#000000"; // Solid black color
        ctx.fill();

        // 3. REALISM CATCH-LIGHT: Shiny glass reflection dot
        ctx.beginPath();
        ctx.arc(pupilX - 1.5, pupilY - 1.5, 1, 0, Math.PI * 2);
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
    <div style={{ 
      position: "relative", 
      width: "195px",   // True 3:4 aspect portrait ratio wrapper layout
      height: "260px",  // Removes side black bars completely
      display: "inline-block",
      overflow: "hidden",
      borderRadius: "16px"
    }}>
      {/* Base Avatar Asset Frame Layer */}
      <img
        ref={imgRef}
        src="/images/Avatar-vector.jpeg"
        alt="Interactive Portfolio Avatar"
        style={{ 
          width: "100%", 
          height: "100%",
          display: "block",
          objectFit: "cover", 
          pointerEvents: "none"
        }}
      />
      {/* Realtime Eye Replacement Engine Layer */}
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
