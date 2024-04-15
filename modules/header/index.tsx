import ImageWrapper from "@/components/image-wrapper";
import GlobalContext from "@/context/global-context/global-context";
import { city, locationLink, workText } from "@/modules/header/content";
import {
  greenBallCss,
  hamburgerCss,
  headerTextWrapperCss,
  homeHeaderWrapperCss,
  indiaFlagCss,
  locationWrapperCss,
  workPositionWrapperCss
} from "@/modules/header/styles";
import Link from "next/link";
import { useContext, useRef } from "react";

export default function Header() {
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const { stateValue, setState } = useContext(GlobalContext);

  const clickHandler = () => {
    const hamburger = hamburgerRef.current;
    if (hamburger) {
      setState((prevVal) => !prevVal);
    }
  };

  return (
    <header css={homeHeaderWrapperCss}>
      <div css={headerTextWrapperCss}>
        <Link href={locationLink} css={locationWrapperCss} rel="noopener noreferrer" target="_blank">
          <span>{city}</span>
          <ImageWrapper src="/images/india-flag-icon.png" alt="India Flag" extraStyles={indiaFlagCss} />
        </Link>
        <div css={workPositionWrapperCss}>
          <span css={greenBallCss}></span>
          <span>{workText}</span>
        </div>
      </div>
      <div
        css={hamburgerCss}
        onClick={clickHandler}
        ref={hamburgerRef}
        className={stateValue ? "hamburger-active" : ""}
      >
        <div className="hamburger-lines"></div>
        <div className="hamburger-lines"></div>
        <div className="hamburger-lines"></div>
      </div>
    </header>
  );
}
