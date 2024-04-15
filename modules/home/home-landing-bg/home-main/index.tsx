import { h1Content, h2Text } from "@/modules/home/home-landing-bg/home-main/content";
import {
  h1SpanCss,
  h1WrapperCss,
  h2Css,
  mainCss,
  nameSpanContainerCss
} from "@/modules/home/home-landing-bg/home-main/styles";
import { useEffect, useRef } from "react";

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
  });
  const h1Mapper = (text: string) => {
    if (text.includes("Sai")) {
      return (
        <span css={nameSpanContainerCss} key={`h1-span-${text}`}>
          {text.split(" ").map((word: string) => {
            return (
              <span key={`h1-span-${word}`} css={h1SpanCss} className="name-word">
                {word}
              </span>
            );
          })}
        </span>
      );
    }
    return (
      <span key={`h1-span-${text}`} css={h1SpanCss}>
        {text}
      </span>
    );
  };
  return (
    <main css={mainCss} ref={mainRef}>
      <h1 css={h1WrapperCss}>{h1Content.map(h1Mapper)}</h1>
      <h2 css={h2Css}>{h2Text}</h2>
    </main>
  );
}
