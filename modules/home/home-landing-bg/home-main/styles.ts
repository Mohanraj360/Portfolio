import { mediaQuery } from "@/styles/media-queries";
import { css } from "@emotion/react";

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
  gap: 1.5rem; /* Smoother, predictable spacing between headline and subtext */
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
  letter-spacing: -0.03em;
  /* Fluid typography: auto-scales beautifully between mobile and desktop */
  font-size: clamp(2.2rem, 6vw, 4.5rem); 
  line-height: 1.1;

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
  margin-bottom: 0.4rem;
  
  /* Creates a premium glowing text gradient for your name */
  background: linear-gradient(135deg, #ffffff 30%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const h1SpanCss = css`
  display: block;
  font-weight: 700;
  letter-spacing: -0.01em;
  
  /* Targets the roles ("Data Analyst", "Web Developer") to differentiate them from your name */
  &:not(${nameSpanContainerCss}) {
    font-size: 0.85em; /* Slightly smaller than your name for proper visual hierarchy */
    
    /* Elegant Cyan/Blue highlight for your primary core skill */
    &:nth-of-type(2) {
      color: #38bdf8; 
    }
    
    /* Secondary role returns to a clean, slightly muted white */
    &:nth-of-type(3) {
      color: #ffffff;
      opacity: 0.9;
    }
  }
`;

export const h2Css = css`
  text-align: center;
  font-weight: 400;
  color: #ffffff;
  opacity: 0.75; /* Softens the subtext so it doesn't fight for attention */
  max-width: 680px; /* Prevents the text from stretching too wide on massive screens */
  width: 85%;
  font-size: 1rem;
  line-height: 1.6;
  letter-spacing: 0.01em;

  ${mediaQuery.tablet} {
    font-size: 1.125rem;
    width: 90%;
    line-height: 1.7;
  }
`;
