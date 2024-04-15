import { inspirationPortfolioLink, inspoPortfolioName, inspoText } from "@/modules/footer/footer-credits/content";
import { creditCss, footerCreditsWrapperCss } from "@/modules/footer/footer-credits/styles";
import Link from "next/link";

export default function FooterCredits() {
  return (
    <div css={footerCreditsWrapperCss}>
      <span className="credits-text">{inspoText}</span>
      <Link href={inspirationPortfolioLink} css={creditCss} rel="noopener noreferrer" target="_blank">
        {inspoPortfolioName}
      </Link>
    </div>
  );
}
