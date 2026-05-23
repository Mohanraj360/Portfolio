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

        // Tight look distance boundary to keep it perfectly natural inside the frames
        const maxOffset = 2.0; 
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
          objectFit: "cover", // 🔹 Keeps original facial proportions unwarped while filling the box
          zIndex: 1,
          pointerEvents: "none"
        }}
      />

      {/* 2. OVERLAY EYE MASKS (Calibrated precisely for the unwarped cover layout) */}
      
      {/* Left Eye Mask Container */}
      <div style={{
        position: "absolute",
        top: "35.8%",       // 🔹 Precise vertical position over your glasses lens
        left: "44.3%",      // 🔹 Precise horizontal position
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

      {/* Right Eye Mask Container */}
      <div style={{
        position: "absolute",
        top: "35.8%",       // 🔹 Precise vertical position
        left: "54.2%",      // 🔹 Precise horizontal position
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
