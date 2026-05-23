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

        // Very tight boundary constraint so the pupil stays strictly inside the socket
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
      width: "260px",   // Back to a standard perfect square container
      height: "260px",  
      display: "inline-block",
      overflow: "hidden",
      borderRadius: "16px" // Gives the avatar smooth rounded corners
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
          objectFit: "fill", // 🔹 Forces the image to exactly fill the 260x260 container box with NO black sides
          zIndex: 1,
          pointerEvents: "none"
        }}
      />

      {/* 2. OVERLAY EYE MASKS */}
      {/* These sit at zIndex: 2, perfectly matching the un-cropped 260x260 image dimensions */}
      
      {/* Left Eye Box */}
      <div style={{
        position: "absolute",
        top: "35.2%",
        left: "44.3%",
        width: "14px",
        height: "9px",
        backgroundColor: "#ffffff",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2
      }}>
        {/* Left Tracking Pupil */}
        <div ref={leftPupilRef} style={{
          width: "6px",
          height: "6px",
          backgroundColor: "#000000", 
          borderRadius: "50%",
          position: "relative"
        }}>
          {/* Subtle reflection glint */}
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
        top: "35.2%",
        left: "54.2%",
        width: "14px",
        height: "9px",
        backgroundColor: "#ffffff",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2
      }}>
        {/* Right Tracking Pupil */}
        <div ref={rightPupilRef} style={{
          width: "6px",
          height: "6px",
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
