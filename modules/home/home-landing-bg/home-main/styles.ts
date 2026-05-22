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
  /* Replaced strict padding variables with a clean vertical layout gap */
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
  
  /* Fluid sizing dynamically transitions between desktop and mobile devices smoothly */
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
  margin-bottom: 0.5rem;
  
  /* Modern clean color gradient setup for your name */
  background: linear-gradient(135deg, #ffffff 40%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const h1SpanCss = css`
  display: block;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.2;

  /* Formats the layout of your secondary skill rows beneath your name */
  &:not(${nameSpanContainerCss}) {
    font-size: 0.85em; 
    
    /* "Data Analyst" receives a prominent clean neon-cyan accent color */
    &:nth-of-type(2) {
      color: #38bdf8;
    }
    
    /* "Web Developer" falls back cleanly into a crisp subtle white */
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
  
  /* Softens the text visibility layer so it doesn't fight against the giant H1 title */
  opacity: 0.75; 
  
  /* Restricts paragraph block width on high-resolution screens to preserve typography balance */
  max-width: 640px; 
  width: 88%;
  
  /* Perfect typographic scale for body paragraphs */
  font-size: 1rem;
  line-height: 1.6;
  letter-spacing: 0.01em;

  ${mediaQuery.tablet} {
    font-size: 1.125rem;
    width: 90%;
    line-height: 1.7;
  }
`;
