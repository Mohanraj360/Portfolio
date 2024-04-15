import { mediaQuery } from "@/styles/media-queries";
import { css } from "@emotion/react";

export const homeHeaderWrapperCss = css`
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5% 0 2.75%;
  margin-top: var(--padding-mw);
  text-transform: uppercase;
  position: absolute;
  top: 0;
  left: 0;
  z-index: var(--z-highest);
  ${mediaQuery.mobile} {
    padding: 0 6.5% 0 0%;
  }
`;

export const headerTextWrapperCss = css`
  display: flex;
  align-items: center;
  gap: var(--bor-rad-large);
  font-size: var(--font-size-mini);
  ${mediaQuery.tablet} {
    display: none;
  }
`;

export const locationWrapperCss = css`
  display: flex;
  align-items: center;
  gap: var(--scrollbar-width);
  text-decoration: none;
  color: var(--color-text-default);
  transition: all 0.3s ease;
  &:hover {
    color: var(--color-highlight);
  }
`;

export const indiaFlagCss = css`
  height: var(--padding-mid);
  aspect-ratio: 16 / 9;
  img {
    object-fit: contain;
  }
`;

export const workPositionWrapperCss = css`
  display: flex;
  border: 1px solid var(--color-text-default);
  border-radius: var(--bor-rad-large);
  justify-content: center;
  align-items: center;
  gap: var(--padding-small);
  padding: calc(2 * var(--scrollbar-width)) var(--padding-small);
`;

export const ballGrow = css`
  @keyframes grow-ball {
    0% {
      box-shadow: 0 0 0 0 var(--color-success);
    }
    100% {
      box-shadow: 0 0 0 calc(2 * var(--scrollbar-width)) transparent;
    }
  }
`;

export const greenBallCss = css`
  display: block;
  height: calc(2 * var(--scrollbar-width));
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: var(--color-success);
  animation: grow-ball 3s ease infinite;
  ${ballGrow}
`;

export const hamburgerCss = css`
  display: none;
  ${mediaQuery.tablet} {
    --nav-height: 17.5px;
    --nav-width: 30px;
    --hamburger-line-height: 2px;
    height: var(--nav-height);
    width: var(--nav-width);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    margin-right: var(--gutter-padding);
    position: relative;
    &.hamburger-active {
      .hamburger-lines {
        &:nth-of-type(1) {
          top: 50%;
          transform: translate(0, -50%) rotate(45deg);
        }
        &:nth-of-type(2) {
          opacity: 0;
        }
        &:nth-of-type(3) {
          bottom: 50%;
          transform: translate(0, 50%) rotate(-45deg);
        }
      }
    }
    .hamburger-lines {
      width: 100%;
      height: var(--hamburger-line-height);
      background-color: var(--color-text-default);
      border-radius: 1em;
      transition: all 0.3s ease;
      transform-origin: center;
      position: absolute;
      &:nth-of-type(1) {
        top: 0;
      }
      &:nth-of-type(2) {
        top: 50%;
        transform: translate(0, -50%);
      }
      &:nth-of-type(3) {
        bottom: 0;
      }
    }
  }
`;

export const headerNavCss = css`
  display: none;
  ${mediaQuery.tablet} {
    position: fixed;
    gap: 0;
    height: 100vh;
    width: 100vw;
    background-color: var(--color-bg-black);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: var(--gutter-padding);
    transition: right 0.3s ease;
    z-index: var(--z-low-a);
    right: 100%;
    top: 0;
    padding-left: calc(2.5 * var(--gutter-padding));
    &.nav-active {
      right: 0;
    }
  }
  ${mediaQuery.mobileLandscape} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
  }
`;

export const headerBavItemCss = css`
  text-decoration: none;
  color: var(--color-text-default);
  text-transform: capitalize;
`;
