import { blobCss } from "@/modules/home/home-landing-bg/home-blobs/styles";
import { mediaQuery } from "@/styles/media-queries";
import { css } from "@emotion/react";

export const aboutWrapperCss = css`
  display: flex;
  flex-direction: column;
  gap: var(--padding-dw);
  overflow-x: hidden;
  padding: calc(1.5 * var(--padding-dw)) 0;
  position: relative;
  ${mediaQuery.tablet} {
    padding: var(--padding-mw) 0;
    gap: 0;
  }
`;

export const aboutBlobOneCss = css`
  ${blobCss};
  top: 15%;
  opacity: 0.5;
  left: -15%;
  background: conic-gradient(rgb(16, 183, 169) 60%, rgb(255, 14, 199) 40%);
  height: 500px;
  border-radius: 29% 71% 70% 30% / 22% 41% 59% 78%;
  ${mediaQuery.miniDesktop} {
    left: -35%;
  }
  ${mediaQuery.tablet} {
    height: 150px;
    left: 80%;
    top: 35%;
  }
`;

export const aboutHeadingCss = css`
  margin-left: var(--gutter-padding);
  width: 100%;
`;

export const aboutDescCss = css`
  width: fit-content;
  margin: auto;
  ${mediaQuery.tablet} {
    margin: var(--padding-mw) auto;
  }
`;

export const aboutLineWrapperCss = css`
  overflow: hidden;
`;

export const dummyLinesCss = css`
  font-size: calc(var(--font-size-large) / 2);
  width: 60vw;
  max-width: var(--para-max-width);
  line-height: var(--bor-rad-large);
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
  opacity: 0;
  ${mediaQuery.miniDesktop} {
    font-size: var(--font-size-small);
    line-height: calc(var(--padding-mid) + var(--padding-small));
  }
  ${mediaQuery.tablet} {
    --font-size-small: 1rem;
    line-height: var(--line-height);
    width: 90%;
  }
`;

export const aboutLinesCss = (delay: number) => css`
  position: relative;
  z-index: var(--z-high);
  color: var(--color-text-gray);
  font-size: calc(var(--font-size-large) / 2);
  line-height: var(--bor-rad-large);
  transform: translateY(100%);
  transition: all 0.3s;
  &.active {
    transition: all 0.3s ease ${delay * 0.1 + "s"};
    transform: translateY(0%);
  }
  ${mediaQuery.miniDesktop} {
    font-size: var(--font-size-small);
    line-height: calc(var(--padding-mid) + var(--padding-small));
  }
  ${mediaQuery.tablet} {
    --font-size-small: 1rem;
    line-height: var(--line-height);
  }
`;

export const aboutBtnCss = css`
  margin: auto;
`;
