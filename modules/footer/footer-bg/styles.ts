import { mediaQuery } from "@/styles/media-queries";
import { css } from "@emotion/react";

export const footerBgWrapperCss = css`
  position: absolute;
  inset: 0;
  z-index: var(--z-low-a);
  ${mediaQuery.tablet} {
    left: -80%;
    top: -20%;
    transform: scale(0.5);
  }
`;

export const footerSvgOneCss = css`
  position: absolute;
  top: -60%;
  left: -20%;
  filter: blur(0.5px);
  animation: bounce-one-anim 35s ease-in-out infinite;
  @keyframes bounce-one-anim {
    0% {
      transform: rotate(5deg) translate(0, 0);
    }
    50% {
      transform: rotate(5deg) translate(30px, 20%);
    }
    100% {
      transform: rotate(5deg) translate(0, 0);
    }
  }
`;

export const footerSvgTwoCss = css`
  position: absolute;
  top: 10%;
  left: 20%;
  transform: rotate(15deg);
  filter: blur(0.5px);
  animation: bounce-two-anim 35s ease-in-out infinite;
  @keyframes bounce-two-anim {
    0% {
      transform: rotate(5deg) translate(0, 0);
    }
    50% {
      transform: rotate(15deg) translate(30px, -20%);
    }
    100% {
      transform: rotate(5deg) translate(0, 0);
    }
  }
`;
