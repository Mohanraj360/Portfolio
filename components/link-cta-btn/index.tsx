import { btnWrapperCss } from "@/components/link-cta-btn/styles";
import { LinkCtaBtnProps } from "@/components/link-cta-btn/types";
import Link from "next/link";

export default function LinkCtaBtn(props: LinkCtaBtnProps) {
  const { text, extraStyles, link, target = "false" } = props;
  return target ? (
    <Link href={link} css={[btnWrapperCss, extraStyles]} rel="noopener noreferrer" target="_blank">
      {text}
    </Link>
  ) : (
    <Link href={link} css={[btnWrapperCss, extraStyles]} rel="noopener noreferrer">
      {text}
    </Link>
  );
}
