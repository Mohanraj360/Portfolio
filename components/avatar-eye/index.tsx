"use client";

import { useEffect, useRef } from "react";

export default function AvatarEye() {
  const leftPupilRef = useRef<HTMLDivElement>(null);
  const rightPupilRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const pupils = [leftPupilRef.current, rightPupilRef.current];
      
      pupils.forEach((pupil) => {
        if (!pupil) return;

        // Calculate the absolute center of each eye socket on the screen
        const rect = pupil.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        // Angle between eye center and the cursor
        const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);

        // Natural constraint boundary so the pupil stays inside the eye socket
        const maxOffset = 2; 
        const offsetX = Math.cos(angle) * maxOffset;
        const offsetY = Math.sin(angle) * maxOffset;

        pupil.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div style={{ 
      position: "relative", 
      width: "260px", 
      height: "260px", 
      display: "inline-block",
      overflow: "hidden",
      backgroundColor: "#000000",   // Blends the image borders cleanly with your dark theme background
      borderRadius: "16px"
    }}>
      {/* 1. THE BASE PORTRAIT */}
      <img
        src="/images/Avatar-vector.jpeg"
        alt="Interactive Portfolio Avatar"
        style={{ 
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%", 
          height: "100%",
          display: "block",
          objectFit: "contain", 
          zIndex: 1,
          pointerEvents: "none"
        }}
      />

      {/* 2. OVERLAY EYE MASKS (Calibrated perfectly to cover the original eyes) */}
      
      {/* Left Eye Box */}
      <div style={{
        position: "absolute",
        top: "23.5%",      // 🔹 Adjusted vertically up to move it out of the beard area
        left: "44.5%",     // 🔹 Re-aligned horizontally with the lens center
        width: "14px",
        height: "9px",
        backgroundColor: "#ffffff",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2
      }}>
        {/* Left Interactive Black Pupil */}
        <div ref={leftPupilRef} style={{
          width: "6.5px",
          height: "6.5px",
          backgroundColor: "#000000", 
          borderRadius: "50%",
          position: "relative"
        }}>
          {/* Realism highlight dot */}
          <div style={{
            position: "absolute",
            top: "0.5px",
            left: "0.5px",
            width: "1.5px",
            height: "1.5px",
            backgroundColor: "#ffffff",
            borderRadius: "50%"
          }} />
        </div>
      </div>

      {/* Right Eye Box */}
      <div style={{
        position: "absolute",
        top: "23.5%",      // 🔹 Adjusted vertically up
        left: "54.2%",     // 🔹 Re-aligned horizontally with the lens center
        width: "14px",
        height: "9px",
        backgroundColor: "#ffffff",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2
      }}>
        {/* Right Interactive Black Pupil */}
        <div ref={rightPupilRef} style={{
          width: "6.5px",
          height: "6.5px",
          backgroundColor: "#000000",
          borderRadius: "50%",
          position: "relative"
        }}>
          {/* Realism highlight dot */}
          <div style={{
            position: "absolute",
            top: "0.5px",
            left: "0.5px",
            width: "1.5px",
            height: "1.5px",
            backgroundColor: "#ffffff",
            borderRadius: "50%"
          }} />
        </div>
      </div>

    </div>
  );
}
