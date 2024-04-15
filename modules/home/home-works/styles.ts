import { mediaQuery } from "@/styles/media-queries";
import { css } from "@emotion/react";

export const workWrapperCss = css`
  width: 80vw;
  transform: translateX(10vw);
  border-top-right-radius: var(--bor-rad-large);
  border-top-left-radius: var(--bor-rad-large);
  ${mediaQuery.tablet} {
    border-top-right-radius: calc(var(--padding-small) - var(--scrollbar-width));
    border-top-left-radius: calc(var(--padding-small) - var(--scrollbar-width));
  }
  ${mediaQuery.mobile} {
    width: 100%;
    transform: translateX(0);
  }
`;

export const worksStripWrapperCss = css`
  overflow-x: hidden;
  border-top-right-radius: var(--bor-rad-large);
  border-top-left-radius: var(--bor-rad-large);
  ${mediaQuery.tablet} {
    border-top-right-radius: calc(var(--padding-small) - var(--scrollbar-width));
    border-top-left-radius: calc(var(--padding-small) - var(--scrollbar-width));
  }
`;

export const worksContainerCss = css`
  position: relative;
`;

export const worksStickyContainerCss = css`
  position: sticky;
  top: 0;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    height: 0;
  }
  ${mediaQuery.miniDesktop} {
    position: static;
    height: fit-content;
  }
`;

export const sliderContainer = css`
  display: flex;
  height: 100vh;
  padding: calc(1.25 * var(--padding-dw)) 0;
  gap: var(--gutter-padding);
  ${mediaQuery.miniDesktop} {
    flex-direction: column;
    height: auto;
    padding: var(--padding-mw) 0;
    gap: var(--padding-mw);
  }
`;
