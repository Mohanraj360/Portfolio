import NameSvg from "@/components/logo/name-svg";
import { logoBallCss, logoWrapperCss } from "@/components/logo/styles";
import { LogoProps } from "@/components/logo/types";
import { useCallback } from "react";

export default function Logo(props: LogoProps) {
  const { extraStyles } = props;
  const logoClickHandler = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);
  return (
    <div css={[logoWrapperCss, extraStyles]} onClick={logoClickHandler}>
      <span css={logoBallCss}></span>
      <NameSvg />
    </div>
  );
}
