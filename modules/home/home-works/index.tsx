import MessageStrip from "@/components/message-strip";
import { workStripMsg } from "@/modules/home/home-works/content";
import {
  sliderContainer,
  workWrapperCss,
  worksContainerCss,
  worksStickyContainerCss,
  worksStripWrapperCss
} from "@/modules/home/home-works/styles";
import WorksCarousal from "@/modules/home/home-works/works-carousal";
import WorksIntro from "@/modules/home/home-works/works-intro";
import { MouseEventHandler, useEffect, useRef, useState } from "react";

export default function HomeWorks() {
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const worksWrapperRef = useRef<HTMLElement>(null);
  const worksContainerRef = useRef<HTMLDivElement>(null);
  const slidingContainerRef = useRef<HTMLDivElement>(null);
  const worksCarousalRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (innerWidth < 450) return;
    const worksWrapper = worksWrapperRef.current;
    if (worksWrapper) {
      const widthHandler = () => {
        const numCalc = (num: number) => {
          return (scrollY * num) / (window.innerHeight / 3);
        };
        if (scrollY < window.innerHeight / 3) {
          worksWrapper.style.width = `calc(80vw + ${numCalc(20)}vw)`;
          worksWrapper.style.transform = `translate(${10 - numCalc(10)}vw)`;
        } else {
          worksWrapper.style.width = "100vw";
          worksWrapper.style.transform = `translate(0vw)`;
        }
      };
      window.addEventListener("scroll", widthHandler);
      return () => {
        window.removeEventListener("scroll", widthHandler);
      };
    }
  }, []);
  useEffect(() => {
    if (window.innerWidth <= 1200) return;

    const container = worksContainerRef.current;
    const slidingContainer = slidingContainerRef.current;
    const worksCarousal = worksCarousalRef.current;
    const slider = sliderRef.current;
    const topVal = slider?.getBoundingClientRect().top;

    if (worksCarousal) {
      const { width, left } = worksCarousal.getBoundingClientRect();
      setContainerHeight(width - (window.innerWidth - left) + innerHeight);
    }

    if (container) {
      container.style.height = `${containerHeight}px`;
    }

    if (slidingContainer) {
      const handleScroll = () => {
        const { scrollY } = window;
        const targetScroll = Math.max(0, scrollY - (topVal ?? 0));
        slidingContainer.scrollLeft = targetScroll;
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [containerHeight]);

  return (
    <section css={workWrapperCss} ref={worksWrapperRef} className="scroll-section">
      <div css={worksStripWrapperCss}>
        <MessageStrip
          textOne={workStripMsg.split(" ")[0]}
          textTwo={workStripMsg.split(" ")[1]}
          rotate="0"
          zIndex="0"
          bg={false}
        />
      </div>
      <div css={worksContainerCss} ref={worksContainerRef}>
        <div css={worksStickyContainerCss} ref={slidingContainerRef}>
          <div css={sliderContainer} ref={sliderRef}>
            <WorksIntro />
            <WorksCarousal ref={worksCarousalRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
