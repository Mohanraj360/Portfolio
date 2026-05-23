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
      width: "260px", 
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

      {/* 2. OVERLAY EYE MASKS (Sitting precisely on top of the original graphic) */}
      
      {/* Left Eye Mask Container */}
      <div style={{
        position: "absolute",
        top: "33.8%",
        left: "42.8%",
        width: "15px",
        height: "10px",
        backgroundColor: "#ffffff",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2
      }}>
        {/* Left Interactive Black Pupil */}
        <div ref={leftPupilRef} style={{
          width: "7.5px",
          height: "7.5px",
          backgroundColor: "#000000", 
          borderRadius: "50%",
          position: "relative"
        }}>
          {/* Realism highlight dot */}
          <div style={{
            position: "absolute",
            top: "1px",
            left: "1px",
            width: "2px",
            height: "2px",
            backgroundColor: "#ffffff",
            borderRadius: "50%"
          }} />
        </div>
      </div>

      {/* Right Eye Mask Container */}
      <div style={{
        position: "absolute",
        top: "33.8%",
        left: "53.8%",
        width: "15px",
        height: "10px",
        backgroundColor: "#ffffff",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2
      }}>
        {/* Right Interactive Black Pupil */}
        <div ref={rightPupilRef} style={{
          width: "7.5px",
          height: "7.5px",
          backgroundColor: "#000000",
          borderRadius: "50%",
          position: "relative"
        }}>
          {/* Realism highlight dot */}
          <div style={{
            position: "absolute",
            top: "1px",
            left: "1px",
            width: "2px",
            height: "2px",
            backgroundColor: "#ffffff",
            borderRadius: "50%"
          }} />
        </div>
      </div>

    </div>
  );
}
