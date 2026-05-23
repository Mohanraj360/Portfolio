import { h1Contents, h2Text } from "@/modules/home/home-landing-bg/home-main/content";
import {
  h1SpanCss,
  h1WrapperCss,
  h2Css,
  mainCss,
  nameSpanContainerCss
} from "@/modules/home/home-landing-bg/home-main/styles";
import { useEffect, useRef } from "react";
import AvatarEye from "@/components/avatar-eye";
import { css, keyframes } from "@emotion/react";

// 1. Animation Keyframes
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
            color: ${isDataAnalyst ? '#38bdf8' : '#ffffff'};
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
      
      {/* Structural Flex Layout Wrapper */}
      <div css={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 4rem;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;

        @media (max-width: 968px) {
          flex-direction: column;
          gap: 2rem;
          text-align: center;
        }
      `}>
        
        {/* Left Side Layer: Moving Avatar */}
        <div css={css`
          flex-shrink: 0;
          z-index: 5;
        `}>
          <AvatarEye />
        </div>

        {/* Right Side Layer: All Introduction Content */}
        <div css={css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;

          @media (max-width: 968px) {
            align-items: center;
            text-align: center;
          }
        `}>
          <h1 
            css={[
              h1WrapperCss,
              css`
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                font-weight: 800;
                letter-spacing: -0.02em;
                font-size: clamp(2.4rem, 5vw, 4.2rem);
                line-height: 1.15;

                @media (max-width: 968px) {
                  align-items: center;
                }
              `
            ]}
          >
            {h1Contents.map(h1Mapper)}
          </h1>
          
          <h2 
            css={[
              h2Css,
              css`
                font-weight: 400;
                opacity: 0;
                max-width: 580px;
                margin-top: 1rem;
                animation: ${fadeInUp} 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards;
              `
            ]}
          >
            {h2Text}
          </h2>
        </div>

      </div>
    </main>
  );
}
