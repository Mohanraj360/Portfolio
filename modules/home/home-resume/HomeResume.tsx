import { mail } from "@/common-content";
import Heading from "@/components/heading";
import ImageWrapper from "@/components/image-wrapper";
import LinkCtaBtn from "@/components/link-cta-btn";
import {
  developerClg,
  developerDescription,
  developerName,
  developerPosition,
  developerStudies,
  resumeCtaText,
  resumeHeading,
  resumeLink
} from "@/modules/home/home-resume/content";
import {
  devPositionTextCss,
  homeResumeWrapperCss,
  resumeBtnCss,
  resumeCardsWrapperCss,
  resumeContainerCss,
  resumeDescriptionCss,
  resumeMailCss,
  resumeNameCss,
  resumeWorkImgCss,
  resumeWorkImgWrapperCss,
  resumeWrapperCss,
  resumeBodyCss
} from "@/modules/home/home-resume/styles";
import { commonHeaderCss } from "@/styles/common-styles";
import Link from "next/link";


export default function HomeResume() {
  return (
    <section css={homeResumeWrapperCss} className="scroll-section">
      <Heading text={resumeHeading} extraStyles={commonHeaderCss} />
      <div css={resumeBodyCss}>
        <div css={resumeCardsWrapperCss}>
          <div css={resumeWorkImgWrapperCss}>
            <ImageWrapper alt="Vs-code Work | Next.js" src="/images/resume-work.png" extraStyles={resumeWorkImgCss} />
          </div>
          <div css={resumeWrapperCss}>
            <div css={resumeContainerCss}>
              <span css={resumeNameCss}>{developerName}</span>
              <span css={devPositionTextCss}>{developerPosition}</span>
              <span>{developerStudies}</span>
              <span>{developerClg}</span>
              <Link href={`mailto:${mail}`} css={resumeMailCss}>
                {mail}
              </Link>
              <p css={resumeDescriptionCss}>{developerDescription}</p>
              <LinkCtaBtn link={resumeLink} text={resumeCtaText} extraStyles={resumeBtnCss} target />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
