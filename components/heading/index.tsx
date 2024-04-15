import { headingComponentWrapperCss, headingSpan, headingSpanWrapper } from "@/components/heading/styles";
import { HeadingProps } from "@/components/heading/types";
import { useEffect, useRef } from "react";

export default function Heading(props: HeadingProps) {
  const { text, extraStyles } = props;
  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const heading = headingRef.current;
    const headingSpans = Array.from(heading?.children ?? []);

    if (heading) {
      const headingObvOptions: IntersectionObserverInit = {
        root: document,
        threshold: 0.9
      };
      const headingObvCallback: IntersectionObserverCallback = (entries) => {
        for (const entry of entries) {
          const { boundingClientRect, target } = entry;
          const { top, height } = boundingClientRect;
          const headingSpan = target.querySelector(".heading-span");
          if (top >= innerHeight - height) {
            headingSpan?.classList.remove("active");
          }
          if (entry.isIntersecting) {
            headingSpan?.classList.add("active");
          }
        }
      };
      const expCardObserver = new IntersectionObserver(headingObvCallback, headingObvOptions);
      for (const headingSpanWrapper of headingSpans) {
        expCardObserver.observe(headingSpanWrapper);
      }
      return () => {
        expCardObserver.disconnect();
      };
    }
  }, []);
  const headingTextMapper = (text: string) => {
    return (
      <span key={text} className="socials-heading-text" css={headingSpanWrapper}>
        <span className="heading-span" css={headingSpan}>
          {text}
        </span>
      </span>
    );
  };
  return (
    <h2 css={[headingComponentWrapperCss, extraStyles]} ref={headingRef}>
      {text.split(" ").map(headingTextMapper)}
    </h2>
  );
}
