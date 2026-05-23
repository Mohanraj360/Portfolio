"use client";
import { useEffect, useState } from "react";

export default function HeroIntro() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "2rem",
      background: "linear-gradient(135deg, #0f0f23 0%, #1a0a3d 50%, #0f0f23 100%)",
      overflow: "hidden",
    }}>
      {/* Animated grid background */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          linear-gradient(0deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        animation: "drift 20s linear infinite",
      }} />

      {/* Glowing orbs */}
      <div style={{
        position: "absolute",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, rgba(124, 58, 255, 0.15) 0%, transparent 70%)",
        borderRadius: "50%",
        top: "-100px",
        right: "-100px",
        animation: "float 8s ease-in-out infinite",
      }} />

      <div style={{
        position: "absolute",
        width: "300px",
        height: "300px",
        background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
        borderRadius: "50%",
        bottom: "100px",
        left: "50px",
        animation: "float 10s ease-in-out infinite",
        animationDelay: "2s",
      }} />

      {/* Content container */}
      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: "800px",
        textAlign: "right",
      }}>
        {/* Main headline with gradient effect */}
        <div style={{
          marginBottom: "1.5rem",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}>
          <h1 style={{
            fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
            fontWeight: "900",
            lineHeight: "1.1",
            margin: "0 0 1rem 0",
            background: "linear-gradient(135deg, #c084fc 0%, #60a5fa 40%, #34d399 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-2px",
            fontFamily: "'Outfit', 'Space Grotesk', system-ui, sans-serif",
          }}>
            I'm <br />
            <span style={{
              display: "inline-block",
              animation: isVisible ? "slideIn 1s ease-out 0.3s both" : "none",
            }}>
              S.Mohanraj
            </span>
          </h1>
        </div>

        {/* Role badges with stagger effect */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          marginBottom: "2rem",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}>
          {[
            { text: "Data Analyst", delay: "0.4s" },
            { text: "Web Developer", delay: "0.5s" },
            { text: "Solution Creator", delay: "0.6s" },
          ].map((role, i) => (
            <div
              key={i}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(30px)",
                transition: `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${role.delay}`,
              }}
            >
              <span style={{
                display: "inline-block",
                fontSize: "1.5rem",
                fontWeight: "700",
                background: i === 0 
                  ? "linear-gradient(135deg, #60a5fa, #3b82f6)"
                  : i === 1
                  ? "linear-gradient(135deg, #34d399, #10b981)"
                  : "linear-gradient(135deg, #f472b6, #ec4899)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "'Outfit', system-ui, sans-serif",
                letterSpacing: "-0.5px",
              }}>
                {role.text}
              </span>
            </div>
          ))}
        </div>

        {/* Tagline with fade-in */}
        <p style={{
          fontSize: "1rem",
          lineHeight: "1.8",
          color: "rgba(255, 255, 255, 0.7)",
          maxWidth: "500px",
          marginLeft: "auto",
          fontFamily: "'Outfit', system-ui, sans-serif",
          fontWeight: "400",
          letterSpacing: "0.5px",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.7s",
        }}>
          I bridge the gap between <span style={{ color: "#60a5fa", fontWeight: "600" }}>deep data analytics</span> and <span style={{ color: "#34d399", fontWeight: "600" }}>high-performance web development</span>, crafting accessible and visually captivating digital solutions.
        </p>

        {/* CTA buttons */}
        <div style={{
          display: "flex",
          gap: "1rem",
          marginTop: "2.5rem",
          justifyContent: "flex-end",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.9s",
        }}>
          <button style={{
            padding: "0.875rem 2rem",
            fontSize: "0.95rem",
            fontWeight: "600",
            color: "#0f0f23",
            background: "linear-gradient(135deg, #c084fc, #60a5fa)",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            fontFamily: "'Outfit', system-ui, sans-serif",
            letterSpacing: "0.5px",
            boxShadow: "0 8px 24px rgba(124, 58, 255, 0.3)",
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(124, 58, 255, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(124, 58, 255, 0.3)";
            }}
          >
            View My Work
          </button>

          <button style={{
            padding: "0.875rem 2rem",
            fontSize: "0.95rem",
            fontWeight: "600",
            color: "#60a5fa",
            background: "transparent",
            border: "2px solid rgba(96, 165, 250, 0.4)",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            fontFamily: "'Outfit', system-ui, sans-serif",
            letterSpacing: "0.5px",
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#60a5fa";
              e.currentTarget.style.background = "rgba(96, 165, 250, 0.1)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(96, 165, 250, 0.4)";
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;900&display=swap');

        @keyframes drift {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, 30px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
