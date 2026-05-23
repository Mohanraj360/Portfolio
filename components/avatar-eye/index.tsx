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

        // Get the absolute center of each eye socket on the screen
        const rect = pupil.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        // Angle between the eye center and your cursor
        const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);

        // Keep the movement tight and natural so it stays inside the eye corners
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
      width: "195px",   // True 3:4 portrait crop aspect ratio
      height: "260px",  
      display: "inline-block",
      overflow: "hidden"
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
          zIndex: 1,
          pointerEvents: "none"
        }}
      />

      {/* 2. OVERLAY EYE MASKS (Calibrated using strict sub-pixels to cover the old eyes) */}
      
      {/* Left Eye Sclera Mask */}
      <div style={{
        position: "absolute",
        top: "89px",     // Pixel locked to the left lens center
        left: "83px",    // Pixel locked
        width: "13px",
        height: "8px",
        backgroundColor: "#ffffff",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2
      }}>
        {/* Left Interactive Black Pupil */}
        <div ref={leftPupilRef} style={{
          width: "6px",
          height: "6px",
          backgroundColor: "#000000", 
          borderRadius: "50%",
          position: "relative"
        }}>
          {/* Catch-light highlight glint */}
          <div style={{
            position: "absolute",
            top: "1px",
            left: "1px",
            width: "1.5px",
            height: "1.5px",
            backgroundColor: "#ffffff",
            borderRadius: "50%"
          }} />
        </div>
      </div>

      {/* Right Eye Sclera Mask */}
      <div style={{
        position: "absolute",
        top: "89px",     // Pixel locked to the right lens center
        left: "103px",   // Pixel locked
        width: "13px",
        height: "8px",
        backgroundColor: "#ffffff",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2
      }}>
        {/* Right Interactive Black Pupil */}
        <div ref={rightPupilRef} style={{
          width: "6px",
          height: "6px",
          backgroundColor: "#000000",
          borderRadius: "50%",
          position: "relative"
        }}>
          <div style={{
            position: "absolute",
            top: "1px",
            left: "1px",
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
