import { h1Contents, h2Text } from "@/modules/home/home-landing-bg/home-main/content";
import {
  h1SpanCss,
  h1WrapperCss,
  h2Css,
  mainCss,
  nameSpanContainerCss
} from "@/modules/home/home-landing-bg/home-main/styles";
import { useEffect, useRef } from "react";
import { css, keyframes } from "@emotion/react";

// 1. Text Entry Keyframes
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

// 2. Continuous Glowing Gradient Keyframes
const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export default function HomeMain() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const main = mainRef.current;
    const mainScrollHandler = () => {
      if (scrollY < innerHeight) {
        const percent = (innerHeight - scrollY) / (2 * innerHeight);
        main?.style.setProperty("transform", `scale(${0.5 + percent})`);
      }
    };
    if (main) {
      addEventListener("scroll", mainScrollHandler);
    }
    return () => removeEventListener("scroll", mainScrollHandler);
  }, []); 

  const h1Mapper = (text: string, index: number) => {
    if (text.includes("Mohanraj")) {
      return (
        <span 
          key={`h1-span-${text}`}
          css={[
            nameSpanContainerCss,
            css`
              display: inline-block;
              margin-bottom: 0.4rem;
              background: linear-gradient(270deg, #ffffff, #a855f7, #38bdf8);
              background-size: 200% 200%;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              animation: 
                ${fadeInUp} 1s cubic-bezier(0.16, 1, 0.3, 1) forwards,
                ${gradientShift} 5s ease infinite;
            `
          ]}
        >
          {text.split(" ").map((word: string) => (
            <span key={`h1-span-${word}`} css={h1SpanCss} className="name-word">
              {word}
            </span>
          ))}
        </span>
      );
    }

    const isDataAnalyst = text.includes("Data Analyst");
    
    return (
      <span 
        key={`h1-span-${text}`} 
        css={[
          h1SpanCss,
          css`
            display: block;
            font-size: 0.85em;
            color: isDataAnalyst ? '#38bdf8' : '#ffffff';
            opacity: 0;
            animation: ${fadeInUp} 1s cubic-bezier(0.16, 1, 0.3, 1) ${0.15 * index}s forwards;
          `
        ]}
      >
        {text}
      </span>
    );
  };

  return (
    <main css={mainCss} ref={mainRef}>
      <h1 
        css={[
          h1WrapperCss,
          css`
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            font-weight: 800;
            letter-spacing: -0.02em;
            font-size: clamp(2.4rem, 6vw, 4.8rem);
            line-height: 1.15;
          `
        ]}
      >
        {/* CHANGED: Mapping over h1Contents to perfectly match your data export */}
        {h1Contents.map(h1Mapper)}
      </h1>
      
      <h2 
        css={[
          h2Css,
          css`
            text-align: center;
            font-weight: 400;
            color: #ffffff;
            opacity: 0;
            max-width: 640px;
            width: 88%;
            font-size: 1rem;
            line-height: 1.6;
            margin-top: 0.5rem;
            animation: ${fadeInUp} 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards;
            
            @media (min-width: 768px) {
              font-size: 1.125rem;
              line-height: 1.7;
            }
          `
        ]}
      >
        {h2Text}
      </h2>
    </main>
  );
}
