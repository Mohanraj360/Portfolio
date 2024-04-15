import Heading from "@/components/heading";
import { worksDescription, worksHeading } from "@/modules/home/home-works/works-intro/content";
import { workIntroBlobCss, worksIntroWrapperCss } from "@/modules/home/home-works/works-intro/styles";

export default function WorksIntro() {
  return (
    <div css={worksIntroWrapperCss}>
      <div css={workIntroBlobCss}></div>
      <Heading text={worksHeading} />
      <p>{worksDescription}</p>
    </div>
  );
}
