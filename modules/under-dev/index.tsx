import HomeLandingBg from "@/modules/home/home-landing-bg";
import { h1SpanCss, h1WrapperCss, h2Css, mainCss } from "@/modules/home/home-landing-bg/home-main/styles";
import { underDevH2, underDevMainText } from "@/modules/under-dev/content";

export default function UnderDev() {
  const h1Mapper = (text: string) => {
    return (
      <span key={`h1-span-${text}`} css={h1SpanCss}>
        {text}
      </span>
    );
  };
  return (
    <>
      <main css={mainCss}>
        <h1 css={h1WrapperCss}>{underDevMainText.map(h1Mapper)}</h1>
        <h2 css={h2Css}>{underDevH2}</h2>
      </main>
      <HomeLandingBg />
    </>
  );
}
