"use client";

import { useEffect, useRef, useState } from "react";

export default function AvatarEye() {
  const leftPupilRef = useRef<HTMLDivElement>(null);
  const rightPupilRef = useRef<HTMLDivElement>(null);
  
  // Track state whether user is actively clicking/holding the avatar
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // 1. EYE TRACKING ENGINE (Always active on mouse move)
      const pupils = [leftPupilRef.current, rightPupilRef.current];
      
      pupils.forEach((pupil) => {
        if (!pupil) return;
        const rect = pupil.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
        const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);

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
    <div 
      // 🔹 CLICK INTERACTION TRIGGERS
      onMouseDown={() => setIsClicked(true)}    // When user clicks and holds down mouse key
      onMouseUp={() => setIsClicked(false)}      // When user releases the click
      onMouseLeave={() => setIsClicked(false)}   // Safety fallback if cursor leaves box while clicking
      style={{ 
        position: "relative", 
        width: "260px",       // Matches your wide layout frame dimensions
        height: "260px",      
        display: "inline-block",
        overflow: "hidden",
        cursor: "pointer",    // Shows standard clickable hand pointer icon to the visitor
        borderRadius: "4px"
      }}
    >
      {/* LAYER 1: BASE PORTRAIT IMAGE */}
      {/* 🔹 CSS Transition adds a smooth 3D push down animation to hands/body layer on click */}
      <img
        src="/images/Avatar-vector.jpeg"
        alt="S. Mohanraj Interactive Portfolio Avatar"
        style={{ 
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%", 
          height: "100%",
          display: "block",
          objectFit: "cover",
          zIndex: 1,
          pointerEvents: "none",
          transform: isClicked ? "scale(0.98) translateY(4px)" : "scale(1) translateY(0px)",
          transition: "transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)" // Snappy realistic bounce effect
        }}
      />

      {/* LAYER 2: INTERACTIVE EYE OVERLAYS */}
      {/* Note: Eye offsets auto-adjust tracking alignment even during the click-body scale push down */}
      
      {/* Left Eye Whites Pod */}
      <div style={{
        position: "absolute",
        top: isClicked ? "36.2%" : "35.5%", // Dynamic shift mapping matching image frame push down height
        left: "44.0%",      
        width: "10px",      
        height: "4.5px",    
        backgroundColor: "#ffffff",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2,
        transition: "top 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
      }}>
        <div ref={leftPupilRef} style={{
          width: "3.8px",   
          height: "3.8px",
          backgroundColor: "#000000", 
          borderRadius: "50%",
          position: "relative"
        }} />
      </div>

      {/* Right Eye Whites Pod */}
      <div style={{
        position: "absolute",
        top: isClicked ? "36.2%" : "35.5%", 
        left: "55.6%",      
        width: "10px",
        height: "4.5px",
        backgroundColor: "#ffffff",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2,
        transition: "top 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
      }}>
        <div ref={rightPupilRef} style={{
          width: "3.8px",
          height: "3.8px",
          backgroundColor: "#000000",
          borderRadius: "50%",
          position: "relative"
        }} />
      </div>

      {/* OPTIONAL LAYER 3: CYAN HUD EMIT LIGHT ON CLICK */}
      {/* Creates a subtle neon pulse glow effect behind hands panel whenever clicked */}
      <div style={{
        position: "absolute",
        bottom: "15%",
        left: "25%",
        width: "50%",
        height: "20%",
        background: "radial-gradient(circle, rgba(0,242,254,0.15) 0%, rgba(0,0,0,0) 70%)",
        zIndex: 3,
        pointerEvents: "none",
        opacity: isClicked ? 1 : 0,
        transition: "opacity 0.15s ease-in-out"
      }} />

    </div>
  );
}
