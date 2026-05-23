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

        // Calculate absolute center of each eye socket on the screen
        const rect = pupil.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        // Angle between eye center and the cursor
        const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);

        // Natural constraint boundary so the pupil stays inside your glasses frames
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
      width: "195px",   // 🔹 FIXED: Perfectly matches the true 3:4 aspect ratio of your image
      height: "260px",  // 🔹 FIXED: Removes all black backgrounds, tops, and sides completely
      display: "inline-block",
      overflow: "hidden",
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
          objectFit: "cover", // Fills the container box smoothly with no deformation
          zIndex: 1,
          pointerEvents: "none"
        }}
      />

      {/* 2. OVERLAY EYE MASKS (Pixel-aligned directly over your portrait glasses frames) */}
      
      {/* Left Eye Box */}
      <div style={{
        position: "absolute",
        top: "33.8%",      // 🔹 LOCKED: Coordinates calibrated perfectly for the native 3:4 image grid
        left: "40.5%",     // 🔹 LOCKED
        width: "13px",
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
          {/* Catch-light highlight glint */}
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
        top: "33.8%",      // 🔹 LOCKED
        left: "55.0%",     // 🔹 LOCKED
        width: "13px",
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
