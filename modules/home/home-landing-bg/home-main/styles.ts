import { mediaQuery } from "@/styles/media-queries";
import { css, keyframes } from "@emotion/react";

// 1. Animation: Smoothly slides up and fades in text when page loads
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// 2. Animation: Gently moves the gradient background across your name
const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const mainCss = css`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  background: transparent;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem; 
  background-color: transparent;

  ${mediaQuery.tablet} {
    gap: 2rem;
  }
`;

export const h1WrapperCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-weight: 800;
  letter-spacing: -0.02em;
  font-size: clamp(2.2rem, 6vw, 4.5rem);
  line-height: 1.1;

  /* Triggers the entry animation for the main title */
  animation: ${fadeInUp} 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;

  ${mediaQuery.tablet} {
    font-size: clamp(3rem, 8vw, 5.5rem);
    line-height: 1.15;
  }
`;

export const nameSpanContainerCss = css`
  display: inline-flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.3em;
  margin-bottom: 0.5rem;
  
  /* Upgraded to a 3-tone moving gradient for an active fluid color feel */
  background: linear-gradient(270deg, #ffffff, #a855f7, #38bdf8);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  /* Attaches the looping shift effect to your name */
  animation: ${gradientMove} 6s ease infinite;
`;

export const h1SpanCss = css`
  display: block;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.2;

  &:not(${nameSpanContainerCss}) {
    font-size: 0.85em; 
    
    &:nth-of-type(2) {
      color: #38bdf8;
      /* Staggers the fade-in slightly so the roles appear just after your name */
      animation: ${fadeInUp} 1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards;
    }
    
    &:nth-of-type(3) {
      color: #ffffff;
      opacity: 0.9;
      animation: ${fadeInUp} 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
    }
  }
`;

export const h2Css = css`
  text-align: center;
  font-weight: 400;
  color: #ffffff;
  opacity: 0.75; 
  max-width: 640px; 
  width: 88%;
  font-size: 1rem;
  line-height: 1.6;
  letter-spacing: 0.01em;

  /* Delays the paragraph fade-in so it finishes the full layout entry sequence sequence */
  animation: ${fadeInUp} 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.45s forwards;

  ${mediaQuery.tablet} {
    font-size: 1.125rem;
    width: 90%;
    line-height: 1.7;
  }
`;
