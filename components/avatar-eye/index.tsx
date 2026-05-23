import { useEffect, useRef } from "react";

export default function AvatarEye() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  // Calibrated target center percentages for your new vector illustration
  const eyeTargets = [
    { xPercent: 0.452, yPercent: 0.355, radius: 10 }, // Left Eye Center
    { xPercent: 0.548, yPercent: 0.355, radius: 10 }  // Right Eye Center
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const img = imgRef.current;
    if (!canvas || !img) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let mouse = { x: 0, y: 0 };

    // Track mouse movement across the viewport
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      drawEyes();
    };

    // Keep canvas dimensions synced with the image dimensions
    const resizeCanvas = () => {
      canvas.width = img.clientWidth;
      canvas.height = img.clientHeight;
      drawEyes();
    };

    const drawEyes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const rect = canvas.getBoundingClientRect();

      eyeTargets.forEach((target) => {
        // Calculate absolute position of eye centers on the screen
        const eyeX = rect.left + target.xPercent * canvas.width;
        const eyeY = rect.top + target.yPercent * canvas.height;

        // Calculate angle between the eye center and mouse cursor
        const angle = Math.atan2(mouse.y - eyeY, mouse.x - eyeX);

        // Limit maximum look-offset movement radius inside the sockets
        const maxOffset = 5;
        const offsetX = Math.cos(angle) * maxOffset;
        const offsetY = Math.sin(angle) * maxOffset;

        // Determine dynamic pupil position coordinates
        const pupilX = target.xPercent * canvas.width + offsetX;
        const pupilY = target.yPercent * canvas.height + offsetY;

        // Draw Iris/Pupil Overlay
        ctx.beginPath();
        ctx.arc(pupilX, pupilY, target.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#2d7d52"; // Matches the illustration's green eyes
        ctx.fill();

        // Draw dynamic reflection highlight dot
        ctx.beginPath();
        ctx.arc(pupilX - 3, pupilY - 3, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resizeCanvas);
    
    // Trigger initial resizing calculations
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
    <div style={{ position: "relative", width: "280px", display: "inline-block" }}>
      {/* Your new illustration asset */}
      <img
        ref={imgRef}
        src="/avatar-vector.png"
        alt="Mohanraj Avatar"
        style={{ width: "100%", display: "block" }}
      />
      {/* Eye Animation tracking Canvas layer layer */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 100%,
          height: 100%,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
