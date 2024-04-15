import { mediaQuery } from "@/styles/media-queries";
import { css } from "@emotion/react";

export const workCardsWrapperCss = css`
  display: flex;
  gap: calc(2 * var(--bor-rad-large));
  height: 100%;
  padding-right: var(--gutter-padding);
  ${mediaQuery.miniDesktop} {
    flex-direction: column;
    align-items: center;
    padding: 0 var(--gutter-padding);
    gap: var(--bor-rad-large);
  }
`;

export const workCardCss = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: var(--bor-rad-large);
  padding-bottom: 0;
  width: 35vw;
  gap: var(--padding-mid);
  flex-shrink: 0;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    border-radius: var(--padding-mid);
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 100%;
    width: 100%;
    background-color: var(--custom-color);
    z-index: var(--z-mid);
    transition: all 0.3s ease;
  }
  &::after {
    position: absolute;
    content: "";
    border-radius: var(--padding-mid);
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    height: 50%;
    width: 85%;
    background-color: var(--custom-color);
    z-index: var(--z-low-a);
    filter: blur(100px);
    opacity: 0.8;
  }
  &:hover {
    &::before {
      width: 104%;
      height: 102%;
    }
  }
  ${mediaQuery.miniDesktop} {
    max-width: var(--tablet-width);
    width: 100%;
    height: 50vh;
    &::after {
      height: 25%;
    }
  }
  ${mediaQuery.tablet} {
    &:hover {
      &::before {
        width: 100%;
        height: 100%;
      }
    }
    &::after {
      width: 100%;
      transform: translate(-50%, 0);
      top: 10%;
      opacity: 0.4;
    }
  }
  ${mediaQuery.mobile} {
    padding: var(--padding-mid);
    padding-bottom: 0;
    gap: var(--padding-small);
    &::before {
      border-radius: var(--padding-small);
    }
  }
`;

export const workTitleWrapperCss = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  color: var(--color-bg-black);
  z-index: var(--z-mid);
`;

export const workTitleCss = css`
  font-weight: 500;
  font-size: var(--font-size-icon);
`;

export const workCtaWrapper = css`
  height: var(--bor-rad-large);
  width: calc(2 * var(--bor-rad-large));
  position: relative;
`;

export const workCardCtaCss = css`
  display: flex;
  align-items: center;
  gap: var(--padding-small);
  text-decoration: none;
  color: inherit;
  padding: calc(2 * var(--scrollbar-width)) var(--padding-small);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  border-radius: var(--scrollbar-width);
  &:hover {
    background-color: var(--color-highlight);
  }
`;

export const workCardCtaSvgCss = css`
  font-size: var(--font-size-icon);
`;

export const workImgCss = css`
  height: 100%;
  width: 100%;
  border-top-right-radius: var(--padding-small);
  border-top-left-radius: var(--padding-small);
  overflow: hidden;
  img {
    object-fit: cover;
    object-position: top;
  }
  ${mediaQuery.mobile} {
    border-top-right-radius: var(--scrollbar-width);
    border-top-left-radius: var(--scrollbar-width);
  }
`;
