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
        const maxOffset = 2.5; 
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
      width: "260px",   // Locked square container box
      height: "260px",  
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
          objectFit: "fill", 
          zIndex: 1,
          pointerEvents: "none"
        }}
      />

      {/* 2. PIXEL-LOCKED NATURAL EYE REPLACEMENTS */}
      {/* This creates custom eye frames that sit perfectly over the original graphic, seamlessly blending in */}
      
      {/* Left Eye Socket */}
      <div style={{
        position: "absolute",
        top: "92px",      // Fixed position matching your glasses frames exactly
        left: "115px",    
        width: "14px",
        height: "10px",
        backgroundColor: "#ffffff", // Pure matching eye white sclera
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2,
        overflow: "hidden" // Keeps the pupil strictly cut off at the eyelids
      }}>
        {/* Left Interactive Black Pupil */}
        <div ref={leftPupilRef} style={{
          width: "6.5px",
          height: "6.5px",
          backgroundColor: "#000000", 
          borderRadius: "50%",
          position: "relative"
        }}>
          {/* Realism catch-light reflection glint */}
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

      {/* Right Eye Socket */}
      <div style={{
        position: "absolute",
        top: "92px",
        left: "141px",    // Fixed position matching your glasses frames exactly
        width: "14px",
        height: "10px",
        backgroundColor: "#ffffff",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2,
        overflow: "hidden"
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
