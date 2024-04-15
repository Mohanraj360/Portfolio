import { mediaQuery } from "@/styles/media-queries";
import { css } from "@emotion/react";

export const footerSocialsWrapperCss = css`
  display: flex;
  flex-direction: column;
  gap: var(--bor-rad-large);
  ${mediaQuery.tablet} {
    gap: var(--padding-mid);
  }
`;

export const mailCss = css`
  color: var(--color-text-gray);
  text-decoration: none;
  position: relative;
  padding-bottom: var(--padding-small);
  width: fit-content;
  transition: all 0.3s ease;
  ${mediaQuery.desktop} {
    &::before {
      z-index: var(--z-low-a);
      position: absolute;
      content: "";
      background-color: var(--color-highlight);
      height: 2px;
      width: 0%;
      transition: all 0.3s ease;
      right: -5%;
      bottom: 0;
    }
    &:hover {
      color: var(--color-highlight);
      &::before {
        width: 110%;
        left: -5%;
      }
    }
  }
  ${mediaQuery.tablet} {
    padding-bottom: 0;
  }
`;

export const socialIconsWrapperCss = css`
  display: flex;
  ${mediaQuery.mobile} {
    width: 80%;
    flex-wrap: wrap;
  }
`;

export const socialIconLinkCss = css`
  position: relative;
  color: var(--color-text-default);
  font-size: var(--font-size-icon);
  height: calc(4 * var(--padding-small));
  aspect-ratio: 1;
`;

export const socialWrapperCss = css`
  color: var(--color-text-default);
  font-size: var(--font-size-icon);
  height: calc(2 * var(--padding-mid));
  aspect-ratio: 1;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
  transition: all 0.3s ease;
  &::before {
    position: absolute;
    content: "";
    height: 0%;
    width: 0%;
    border-radius: 50%;
    background-color: var(--color-highlight);
    z-index: var(--z-low-a);
    transition: all 0.3s ease;
  }
  &:hover {
    color: var(--color-bg-black);
    &::before {
      height: 100%;
      width: 100%;
    }
  }
`;
