import { blobCss } from "@/modules/home/home-landing-bg/home-blobs/styles";
import { mediaQuery } from "@/styles/media-queries";
import { css } from "@emotion/react";

export const homeSkillsWrapperCss = css`
  padding-top: var(--padding-dw);
  margin-bottom: calc(3 * var(--padding-dw));
  position: relative;
  ${mediaQuery.tablet} {
    margin-bottom: var(--padding-dw);
    padding-top: var(--padding-mw);
  }
`;

export const skillBlobOneCss = css`
  ${blobCss};
  top: 0%;
  opacity: 0.5;
  left: -10%;
  background: conic-gradient(rgb(25, 40, 255) 60%, rgb(171, 14, 255) 40%);
  height: 400px;
  border-radius: 29% 71% 70% 30% / 22% 41% 59% 78%;
  ${mediaQuery.tablet} {
    height: 150px;
  }
`;

export const skillBlobTwoCss = css`
  ${blobCss};
  top: -25%;
  opacity: 0.6;
  right: -5%;
  background: conic-gradient(rgb(83, 16, 183) 60%, rgb(255, 159, 14) 40%);
  height: 250px;
  border-radius: 29% 71% 70% 30% / 22% 41% 59% 78%;
  ${mediaQuery.tablet} {
    display: none;
  }
`;
