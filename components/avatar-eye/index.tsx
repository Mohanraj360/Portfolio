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

        // Find the absolute center position of the eye socket on screen
        const rect = pupil.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        // Calculate the angle between the eye and the cursor
        const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);

        // Max travel distance in pixels so the pupil stays inside the eye socket boundaries
        const maxOffset = 3; 
        const offsetX = Math.cos(angle) * maxOffset;
        const offsetY = Math.sin(angle) * maxOffset;

        // Smoothly move the pupil element
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
      {/* 1. Background Sclera (White Part of the Eyes) */}
      {/* These sit exactly behind the frames to mask the pupil movement cleanly */}
      <div style={{
        position: "absolute",
        top: "33.5%",
        left: "42.5%",
        width: "16px",
        height: "10px",
        backgroundColor: "#ffffff",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justify-content: center,
        zIndex: 1
      }}>
        {/* Left Moving Pupil */}
        <div ref={leftPupilRef} style={{
          width: "7px",
          height: "7px",
          backgroundColor: "#2d7d52", // Matches your illustration's green iris tone
          borderRadius: "50%",
          position: "relative"
        }}>
          {/* Realism highlight catch-light glint */}
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

      <div style={{
        position: "absolute",
        top: "33.5%",
        left: "53.8%",
        width: "16px",
        height: "10px",
        backgroundColor: "#ffffff",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justify-content: center,
        zIndex: 1
      }}>
        {/* Right Moving Pupil */}
        <div ref={rightPupilRef} style={{
          width: "7px",
          height: "7px",
          backgroundColor: "#2d7d52",
          borderRadius: "50%",
          position: "relative"
        }}>
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

      {/* 2. Main Character Foreground Mask Layer */}
      {/* This image contains your transparent portrait cutout sitting on top */}
      <img
        src="/images/avatar-vector.png"
        alt="S. Mohanraj Portfolio Avatar"
        style={{ 
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%", 
          height: "100%",
          display: "block",
          zIndex: 2, // Keeps face outlines and glasses layers over the tracking pupils
          pointerEvents: "none"
        }}
      />
    </div>
  );
}
