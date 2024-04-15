import { mail } from "@/common-content";
import Heading from "@/components/heading";
import useMousePos from "@/hooks/use-mouse-pos";
import { socials, socialsHeading } from "@/modules/footer/footer-main/footer-socials/content";
import {
  footerSocialsWrapperCss,
  mailCss,
  socialIconLinkCss,
  socialIconsWrapperCss,
  socialWrapperCss
} from "@/modules/footer/footer-main/footer-socials/styles";
import Link from "next/link";

export default function FooterSocials() {
  const containerRef = useMousePos();

  const socialsMapper = (socialHandle: (typeof socials)[0], index: number) => {
    const { Icon, link } = socialHandle;
    return (
      <Link
        href={link}
        key={`social-handle-${index}`}
        css={socialIconLinkCss}
        rel="noopener noreferrer"
        target="_blank"
      >
        <div css={socialWrapperCss} className="link-wrapper">
          <Icon />
        </div>
      </Link>
    );
  };

  return (
    <div css={footerSocialsWrapperCss}>
      <Heading text={socialsHeading} />
      <Link href={`mailto:${mail}`} css={mailCss}>
        {mail}
      </Link>
      <div css={socialIconsWrapperCss} ref={containerRef}>
        {socials.map(socialsMapper)}
      </div>
    </div>
  );
}
