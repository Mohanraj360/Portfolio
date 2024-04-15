import ImageWrapper from "@/components/image-wrapper";
import { workData } from "@/modules/home/home-works/works-carousal/content";
import {
  workCardCss,
  workCardCtaCss,
  workCardCtaSvgCss,
  workCardsWrapperCss,
  workCtaWrapper,
  workImgCss,
  workTitleCss,
  workTitleWrapperCss
} from "@/modules/home/home-works/works-carousal/styles";
import Link from "next/link";
import { Ref, forwardRef } from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

function WC(_: unknown, ref: Ref<HTMLDivElement>) {
  const worksMapper = (work: (typeof workData)[0], index: number) => {
    const { siteName, siteImg, siteLink, customColor } = work;
    return (
      <div key={`works-card-${index}`} css={[workCardCss, { "--custom-color": `${customColor}` }]}>
        <div css={workTitleWrapperCss}>
          <h3 css={workTitleCss}>{siteName}</h3>
          <div css={workCtaWrapper}>
            <Link href={siteLink} css={workCardCtaCss} className="link-wrapper">
              <span>Visit</span>
              <BsArrowUpRightCircleFill css={workCardCtaSvgCss} />
            </Link>
          </div>
        </div>
        <ImageWrapper alt="website template" src={siteImg} extraStyles={workImgCss} />
      </div>
    );
  };
  return (
    <div css={workCardsWrapperCss} ref={ref}>
      {workData.map(worksMapper)}
    </div>
  );
}

const WorksCarousal = forwardRef(WC);
export default WorksCarousal;
