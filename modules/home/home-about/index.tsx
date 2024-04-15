import { mail } from "@/common-content";
import Heading from "@/components/heading";
import LinkCtaBtn from "@/components/link-cta-btn";
import { aboutCtaText, aboutHeadingText, aboutText } from "@/modules/home/home-about/content";
import {
  aboutBlobOneCss,
  aboutBtnCss,
  aboutDescCss,
  aboutHeadingCss,
  aboutLineWrapperCss,
  aboutLinesCss,
  aboutWrapperCss,
  dummyLinesCss
} from "@/modules/home/home-about/styles";
import { useEffect, useRef, useState } from "react";

export default function HomeAbout() {
  const aboutLinesWrapperRef = useRef<HTMLDivElement>(null);
  const dummyLinesRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState<string[]>([]);

  useEffect(() => {
    const dummyPara = dummyLinesRef.current;
    const source = dummyPara?.firstChild;

    const textContent = source?.textContent;
    let range = new Range();
    let lines = [];
    let lineCharacters = [];

    if (textContent) {
      for (let i = 0; i < textContent.length; i++) {
        range.setStart(source, 0);
        range.setEnd(source, i + 1);
        let lineIndex = range.getClientRects().length - 1;
        if (!lines[lineIndex]) {
          lines.push((lineCharacters = []));
        }
        lineCharacters.push(textContent.charAt(i));
      }
    }

    lines = lines.map(function operator(characters) {
      return characters.join("").trim();
    });
    setContent(lines);
  }, []);

  useEffect(() => {
    const linesContainer = aboutLinesWrapperRef.current;

    if (linesContainer) {
      const aboutLinesOptions: IntersectionObserverInit = {
        root: document,
        threshold: 0.85
      };
      const aboutLinesCallback: IntersectionObserverCallback = (entries) => {
        for (const entry of entries) {
          const { boundingClientRect, target } = entry;
          const { top, height } = boundingClientRect;
          const aboutLines = Array.from(target.querySelectorAll(".about-line"));
          for (const aboutLine of aboutLines) {
            if (top >= innerHeight - 0.9 * height) {
              aboutLine?.classList.remove("active");
            }
            if (entry.isIntersecting) {
              aboutLine?.classList.add("active");
            }
          }
        }
      };
      const aboutLinesObserver = new IntersectionObserver(aboutLinesCallback, aboutLinesOptions);
      aboutLinesObserver.observe(linesContainer);
      return () => {
        aboutLinesObserver.disconnect();
      };
    }
  }, []);

  const aboutDescMapper = (lines: string, index: number) => {
    return (
      <div key={`about-line-${index}`} css={aboutLineWrapperCss}>
        <p css={aboutLinesCss(index)} className="about-line">
          {lines}
        </p>
      </div>
    );
  };

  return (
    <section css={aboutWrapperCss} className="scroll-section">
      <div css={aboutBlobOneCss}></div>
      <Heading text={aboutHeadingText} extraStyles={aboutHeadingCss} />
      <div css={aboutDescCss} ref={aboutLinesWrapperRef}>
        {content.map(aboutDescMapper)}
        <p css={dummyLinesCss} ref={dummyLinesRef}>
          {aboutText}
        </p>
      </div>

      <LinkCtaBtn link={`mailto:${mail}`} text={aboutCtaText} extraStyles={aboutBtnCss} />
    </section>
  );
}
